/**
 * Foundation Evidence Checker — client-side inspector for open artefacts.
 *
 * Accepts:
 *   - TLA-185 JSON (*.json / *.tla185.bundle.json)
 *   - TLA-EVID draft JSON (`schema_id: la.archive.audit-pack.v1`)
 *   - Archive Audit Pack (.tlaa) — ZIP with landscape-archive.tlaa.json
 *
 * Refuses:
 *   - Commercial Landscape Archive Package (.tla)
 *   - Encrypted commercial transit (.lapkg) — no decrypt
 *   - Packages containing .rfa / commercial geometry roles
 *
 * Local structure checks ≠ Archive Seal issue ≠ Foundation Approved.
 * Files never leave the browser.
 */
;(function () {
  'use strict'

  const COMMERCIAL_MANIFEST = 'landscape-archive.tla.json'
  const AUDIT_MANIFEST = 'landscape-archive.tlaa.json'
  const COMMERCIAL_PACKAGE_TYPE = 'landscape-archive-tla-package'
  const AUDIT_PACKAGE_TYPE = 'landscape-archive-audit-pack'
  const ENCRYPTED_PACKAGE_TYPE = 'landscape-archive-encrypted-package'
  const TLA_EVID_SCHEMA_ID = 'la.archive.audit-pack.v1'
  const TLA_EVID_TOPICS = new Set([
    'botanical',
    'climate',
    'sustainability',
    'risk',
    'cultural',
    'synthetic',
    'other'
  ])
  const TLA_EVID_CONFIDENCE = new Set([
    'documented',
    'partial',
    'asserted_without_uri',
    'unknown'
  ])

  const FORBIDDEN_EXTENSIONS = [
    '.rfa',
    '.rvt',
    '.rte',
    '.tla',
    '.lapkg',
    '.glb',
    '.gltf',
    '.fbx',
    '.obj',
    '.3dm',
    '.skp'
  ]
  const FORBIDDEN_ROLES = ['primary-family', 'bundle-zip', 'family-manifest']

  const ARCHIVE_ORIGIN = 'https://landscapearchive.com.au'
  const HUB_HINT =
    'This looks like a commercial Landscape Archive Package. Use the Landscape Archive Hub on the commercial site for entitled packages — not this Foundation tool.'

  const root = document.getElementById('evidence-checker')
  if (!root) return

  const fileInput = root.querySelector('[data-ec-file]')
  const dropzone = root.querySelector('[data-ec-drop]')
  const statusEl = root.querySelector('[data-ec-status]')
  const resultsEl = root.querySelector('[data-ec-results]')
  const clearBtn = root.querySelector('[data-ec-clear]')

  function setStatus(message, tone) {
    if (!statusEl) return
    statusEl.textContent = message || ''
    statusEl.dataset.tone = tone || 'neutral'
    statusEl.hidden = !message
  }

  function clearResults() {
    if (resultsEl) resultsEl.innerHTML = ''
    setStatus('', 'neutral')
    if (fileInput) fileInput.value = ''
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function formatBytes(n) {
    const num = Number(n) || 0
    if (num < 1024) return `${num} B`
    if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`
    return `${(num / (1024 * 1024)).toFixed(2)} MB`
  }

  function baseName(pathLike) {
    const normalized = String(pathLike || '').replace(/\\/g, '/')
    const parts = normalized.split('/')
    return parts[parts.length - 1] || ''
  }

  function extOf(name) {
    const lower = String(name || '').toLowerCase()
    const i = lower.lastIndexOf('.')
    return i >= 0 ? lower.slice(i) : ''
  }

  function looksLikeZip(bytes) {
    return bytes && bytes.length >= 4 && bytes[0] === 0x50 && bytes[1] === 0x4b
  }

  function readU16(view, offset) {
    return view.getUint16(offset, true)
  }

  function readU32(view, offset) {
    return view.getUint32(offset, true)
  }

  function decodeUtf8(bytes) {
    return new TextDecoder('utf-8', { fatal: false }).decode(bytes)
  }

  /**
   * Minimal ZIP reader: list entries; extract store or deflate-raw payloads.
   */
  async function readZip(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    let offset = 0
    const entries = []

    while (offset + 30 <= bytes.length) {
      const sig = readU32(view, offset)
      if (sig === 0x02014b50 || sig === 0x06054b50) break // central dir / EOCD
      if (sig !== 0x04034b50) break

      const compression = readU16(view, offset + 8)
      const compSize = readU32(view, offset + 18)
      const uncompSize = readU32(view, offset + 22)
      const nameLen = readU16(view, offset + 26)
      const extraLen = readU16(view, offset + 28)
      const nameStart = offset + 30
      const nameEnd = nameStart + nameLen
      const dataStart = nameEnd + extraLen
      const dataEnd = dataStart + compSize

      if (nameEnd > bytes.length || dataEnd > bytes.length) {
        throw new Error('ZIP appears truncated or corrupt.')
      }

      const name = decodeUtf8(bytes.subarray(nameStart, nameEnd))
      const compressed = bytes.subarray(dataStart, dataEnd)

      entries.push({
        name,
        compression,
        compressedSize: compSize,
        size: uncompSize,
        compressed
      })

      offset = dataEnd
    }

    return entries
  }

  async function inflateRaw(compressed) {
    if (typeof DecompressionStream === 'undefined') {
      throw new Error('This browser cannot inflate ZIP entries (no DecompressionStream).')
    }
    const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('deflate-raw'))
    const buf = await new Response(stream).arrayBuffer()
    return new Uint8Array(buf)
  }

  async function extractEntry(entry) {
    if (entry.compression === 0) {
      return entry.compressed
    }
    if (entry.compression === 8) {
      return inflateRaw(entry.compressed)
    }
    throw new Error(`Unsupported ZIP compression method ${entry.compression} for ${entry.name}`)
  }

  function pathLooksCommercial(relativePath, role) {
    const lowerPath = String(relativePath || '').toLowerCase()
    const lowerRole = String(role || '').toLowerCase()
    if (FORBIDDEN_ROLES.includes(lowerRole)) return true
    if (lowerRole.includes('mesh') || lowerRole.includes('geometry') || lowerRole === 'primary-family') {
      return true
    }
    return FORBIDDEN_EXTENSIONS.some((ext) => lowerPath.endsWith(ext))
  }

  function refuseCommercial(detail) {
    return {
      ok: false,
      kind: 'refused-commercial',
      title: 'Commercial Landscape Archive Package — not supported here',
      message: HUB_HINT,
      detail: detail || '',
      hubUrl: `${ARCHIVE_ORIGIN}/`
    }
  }

  function refuseEncrypted() {
    return {
      ok: false,
      kind: 'refused-encrypted',
      title: 'Encrypted commercial package (.lapkg) — not supported',
      message:
        'Foundation Evidence Checker does not decrypt Landscape Archive Packages. Entitled delivery stays on the commercial Hub path.',
      detail: 'Detected .lapkg / encrypted commercial transit wrapper.',
      hubUrl: `${ARCHIVE_ORIGIN}/`
    }
  }

  function summarizeTlaEvid(payload, fileName) {
    const issues = []
    if (payload.schema_id !== TLA_EVID_SCHEMA_ID) {
      issues.push(`Expected schema_id "${TLA_EVID_SCHEMA_ID}"`)
    }
    if (payload.schema_version !== 1 && payload.schema_version !== undefined) {
      issues.push(`Unexpected schema_version: ${payload.schema_version}`)
    }
    if (!payload.pack_id) issues.push('Missing pack_id')
    if (!Array.isArray(payload.claims)) issues.push('Missing claims array')

    const claims = Array.isArray(payload.claims) ? payload.claims : []
    for (const claim of claims.slice(0, 40)) {
      if (claim.topic && !TLA_EVID_TOPICS.has(claim.topic)) {
        issues.push(`Unexpected claim topic: ${claim.topic}`)
      }
      if (claim.confidence && !TLA_EVID_CONFIDENCE.has(claim.confidence)) {
        issues.push(`Unexpected claim confidence: ${claim.confidence}`)
      }
    }

    const sealRef = payload.attestation?.archive_seal_ref
    return {
      ok: issues.length === 0,
      kind: 'tla-evid',
      title: 'TLA-EVID draft audit pack (open shape)',
      fileName,
      distinction:
        'Open evidence shape only. Local structure check ≠ Archive Seal issue ≠ Foundation Approved.',
      summary: {
        schema_id: payload.schema_id || '(missing)',
        schema_version: payload.schema_version ?? '—',
        pack_id: payload.pack_id || '(missing)',
        claimCount: claims.length,
        projectTitle: payload.project?.title || '—',
        archive_seal_ref: sealRef || '(none — correct for draft)',
        foundation_approved_ref: payload.attestation?.foundation_approved_ref || '(none)'
      },
      issues,
      contents: [{ name: fileName, role: 'tla-evid-json', sizeLabel: 'JSON document' }]
    }
  }

  function summarizeTla185(payload, fileName) {
    const issues = []
    const standardId = String(payload.standardId ?? payload.standard ?? '').trim()
    if (standardId && standardId !== '185' && standardId !== 'TLA-185') {
      issues.push(`Unexpected standardId: ${standardId}`)
    }
    if (!payload.project || typeof payload.project !== 'object') {
      issues.push('Missing project object')
    }
    if (!Array.isArray(payload.botanicalAssets)) {
      issues.push('Missing botanicalAssets array')
    }
    const assets = Array.isArray(payload.botanicalAssets) ? payload.botanicalAssets : []
    const first = assets[0] || {}

    return {
      ok: issues.length === 0,
      kind: 'tla185',
      title: 'Open TLA-185 JSON',
      fileName,
      summary: {
        standardId: standardId || '(missing)',
        federationSchemaVersion: payload.federationSchemaVersion || '—',
        generatedAt: payload.generatedAt || payload.project?.updatedAt || '—',
        projectTitle: payload.project?.title || '—',
        botanicalAssetCount: assets.length,
        firstScientificName: first.scientificName || first.acceptedScientificName || '—',
        firstTaxonID: first.taxonID || '—'
      },
      issues,
      contents: [{ name: fileName, role: 'tla185-json', sizeLabel: 'JSON document' }]
    }
  }

  function summarizeAuditManifest(manifest, entries, fileName) {
    const issues = []
    if (manifest.packageType !== AUDIT_PACKAGE_TYPE) {
      issues.push(`Expected packageType "${AUDIT_PACKAGE_TYPE}", got "${manifest.packageType || '(missing)'}"`)
    }
    if (manifest.formatExtension && manifest.formatExtension !== '.tlaa') {
      issues.push(`Unexpected formatExtension: ${manifest.formatExtension}`)
    }
    if (manifest.commercialGeometry === true) {
      issues.push('commercialGeometry must be false')
    }
    if (manifest.evidenceOnly === false) {
      issues.push('evidenceOnly should be true')
    }
    if (manifest.noCommercialGeometry === false) {
      issues.push('noCommercialGeometry should be true')
    }

    const contents = Array.isArray(manifest.contents) ? manifest.contents : []
    const commercialHits = []

    for (const entry of entries) {
      if (pathLooksCommercial(entry.name, '')) {
        commercialHits.push(entry.name)
      }
    }
    for (const item of contents) {
      if (pathLooksCommercial(item.relativePath || item.fileName, item.role)) {
        commercialHits.push(`${item.role || 'role'}: ${item.fileName || item.relativePath}`)
      }
    }

    if (commercialHits.length) {
      return refuseCommercial(
        `Audit pack contains commercial geometry markers: ${commercialHits.slice(0, 5).join(', ')}`
      )
    }

    const entryNames = entries.map((e) => e.name)
    const listed = contents.map((c) => ({
      name: c.fileName || c.relativePath || '—',
      role: c.role || '—',
      sizeLabel: c.sizeBytes != null ? formatBytes(c.sizeBytes) : '—'
    }))

    return {
      ok: issues.length === 0,
      kind: 'tlaa',
      title: 'Archive Audit Pack (.tlaa)',
      fileName,
      summary: {
        packageType: manifest.packageType || '—',
        schemaVersion: manifest.schemaVersion ?? '—',
        id: manifest.id || '—',
        name: manifest.name || '—',
        version: manifest.version || '—',
        generatedAt: manifest.generatedAt || '—',
        scientificName: manifest.speciesIdentity?.scientificName || '—',
        taxonID: manifest.speciesIdentity?.taxonID || '—',
        evidenceOnly: String(manifest.evidenceOnly),
        commercialGeometry: String(manifest.commercialGeometry),
        zipEntryCount: entries.length
      },
      issues,
      contents: listed.length
        ? listed
        : entryNames.map((name) => ({ name, role: 'zip-entry', sizeLabel: '—' })),
      distinction: manifest.distinction || null
    }
  }

  async function inspectZip(bytes, fileName) {
    const lower = fileName.toLowerCase()
    if (lower.endsWith('.lapkg')) return refuseEncrypted()
    if (lower.endsWith('.tla')) {
      return refuseCommercial('File extension is .tla (Landscape Archive Package).')
    }

    const entries = await readZip(bytes)
    if (!entries.length) {
      return {
        ok: false,
        kind: 'error',
        title: 'Could not read package',
        message: 'No ZIP entries found. The file may not be a ZIP-based package.',
        detail: fileName
      }
    }

    const names = entries.map((e) => e.name.replace(/\\/g, '/'))
    const hasCommercialManifest = names.some((n) => baseName(n) === COMMERCIAL_MANIFEST)
    const hasAuditManifest = names.some((n) => baseName(n) === AUDIT_MANIFEST)
    const hasRfa = names.some((n) => extOf(n) === '.rfa' || n.toLowerCase().endsWith('.rfa'))
    const hasLapkg = names.some((n) => extOf(n) === '.lapkg')

    if (hasLapkg) return refuseEncrypted()
    if (hasCommercialManifest || hasRfa || lower.endsWith('.tla')) {
      const reasons = []
      if (hasCommercialManifest) reasons.push(`found ${COMMERCIAL_MANIFEST}`)
      if (hasRfa) reasons.push('found .rfa (commercial Revit family)')
      return refuseCommercial(reasons.join('; '))
    }

    if (!hasAuditManifest && !lower.endsWith('.tlaa')) {
      // Might still be a loose zip of JSON — try first JSON entry as TLA-185
      const jsonEntry = entries.find((e) => extOf(e.name) === '.json')
      if (jsonEntry) {
        const raw = await extractEntry(jsonEntry)
        const text = decodeUtf8(raw)
        let payload
        try {
          payload = JSON.parse(text)
        } catch {
          return {
            ok: false,
            kind: 'error',
            title: 'Invalid JSON inside ZIP',
            message: `Could not parse ${jsonEntry.name} as JSON.`,
            detail: fileName
          }
        }
        if (payload.packageType === COMMERCIAL_PACKAGE_TYPE || payload.formatExtension === '.tla') {
          return refuseCommercial(`Manifest packageType is commercial (${payload.packageType}).`)
        }
        if (payload.packageType === ENCRYPTED_PACKAGE_TYPE) return refuseEncrypted()
        if (payload.packageType === AUDIT_PACKAGE_TYPE) {
          return summarizeAuditManifest(payload, entries, fileName)
        }
        return summarizeTla185(payload, jsonEntry.name)
      }

      return {
        ok: false,
        kind: 'error',
        title: 'Unrecognized package',
        message:
          'Expected an Archive Audit Pack (.tlaa with landscape-archive.tlaa.json) or open TLA-185 JSON. Commercial .tla packages are not accepted.',
        detail: `Entries: ${names.slice(0, 12).join(', ')}${names.length > 12 ? '…' : ''}`
      }
    }

    const manifestEntry = entries.find((e) => baseName(e.name) === AUDIT_MANIFEST)
    if (!manifestEntry) {
      return {
        ok: false,
        kind: 'error',
        title: 'Missing audit manifest',
        message: `Archive Audit Pack must include ${AUDIT_MANIFEST}.`,
        detail: fileName
      }
    }

    const raw = await extractEntry(manifestEntry)
    let manifest
    try {
      manifest = JSON.parse(decodeUtf8(raw))
    } catch {
      return {
        ok: false,
        kind: 'error',
        title: 'Invalid audit manifest',
        message: `${AUDIT_MANIFEST} is not valid JSON.`,
        detail: fileName
      }
    }

    if (manifest.packageType === COMMERCIAL_PACKAGE_TYPE) {
      return refuseCommercial('Manifest declares commercial Landscape Archive Package type.')
    }

    return summarizeAuditManifest(manifest, entries, fileName)
  }

  async function inspectJson(text, fileName) {
    let payload
    try {
      payload = JSON.parse(text)
    } catch {
      return {
        ok: false,
        kind: 'error',
        title: 'Invalid JSON',
        message: 'The file could not be parsed as JSON.',
        detail: fileName
      }
    }

    if (payload.packageType === COMMERCIAL_PACKAGE_TYPE || payload.formatExtension === '.tla') {
      return refuseCommercial(`JSON declares commercial packageType (${payload.packageType || payload.formatExtension}).`)
    }
    if (payload.packageType === ENCRYPTED_PACKAGE_TYPE || payload.formatExtension === '.lapkg') {
      return refuseEncrypted()
    }
    if (payload.packageType === AUDIT_PACKAGE_TYPE || payload.formatExtension === '.tlaa') {
      return summarizeAuditManifest(payload, [], fileName)
    }
    if (payload.schema_id === TLA_EVID_SCHEMA_ID) {
      return summarizeTlaEvid(payload, fileName)
    }

    return summarizeTla185(payload, fileName)
  }

  async function inspectFile(file) {
    const name = file.name || 'upload'
    const lower = name.toLowerCase()
    setStatus(`Reading ${name}…`, 'neutral')
    resultsEl.innerHTML = ''

    if (lower.endsWith('.lapkg')) {
      renderResult(refuseEncrypted())
      return
    }
    if (lower.endsWith('.tla')) {
      renderResult(refuseCommercial('File extension is .tla (Landscape Archive Package).'))
      return
    }

    const buffer = await file.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    let result
    if (looksLikeZip(bytes) || lower.endsWith('.tlaa') || lower.endsWith('.zip')) {
      result = await inspectZip(bytes, name)
    } else if (lower.endsWith('.json') || lower.endsWith('.jsonld')) {
      result = await inspectJson(decodeUtf8(bytes), name)
    } else {
      // Sniff: ZIP magic already handled; try JSON text
      const text = decodeUtf8(bytes).trim()
      if (text.startsWith('{') || text.startsWith('[')) {
        result = await inspectJson(text, name)
      } else {
        result = {
          ok: false,
          kind: 'error',
          title: 'Unsupported file type',
          message:
            'Upload open TLA-185 JSON or an Archive Audit Pack (.tlaa). Commercial .tla and encrypted .lapkg are refused.',
          detail: name
        }
      }
    }

    renderResult(result)
  }

  function renderResult(result) {
    if (!resultsEl) return

    if (result.kind === 'refused-commercial' || result.kind === 'refused-encrypted') {
      setStatus(result.title, 'refuse')
      resultsEl.innerHTML = `
        <article class="ec-card ec-card--refuse" role="alert">
          <h2>${escapeHtml(result.title)}</h2>
          <p>${escapeHtml(result.message)}</p>
          ${result.detail ? `<p class="ec-detail">${escapeHtml(result.detail)}</p>` : ''}
          <p class="ec-naming">
            <strong>Naming:</strong>
            Commercial Landscape Archive Package (<code>.tla</code>) ·
            Archive Audit Pack (<code>.tlaa</code>) ·
            Open TLA-185 (JSON)
          </p>
          <div class="action-row">
            <a class="btn btn--primary" href="${escapeHtml(result.hubUrl || ARCHIVE_ORIGIN)}" rel="noopener" target="_blank">
              Landscape Archive commercial site <span class="btn__ext" aria-hidden="true">↗</span>
            </a>
            <a class="btn" href="/downloads">Foundation downloads</a>
          </div>
        </article>
      `
      return
    }

    if (result.kind === 'error') {
      setStatus(result.title, 'error')
      resultsEl.innerHTML = `
        <article class="ec-card ec-card--error" role="alert">
          <h2>${escapeHtml(result.title)}</h2>
          <p>${escapeHtml(result.message || '')}</p>
          ${result.detail ? `<p class="ec-detail">${escapeHtml(result.detail)}</p>` : ''}
        </article>
      `
      return
    }

    const tone = result.ok ? 'ok' : 'warn'
    setStatus(
      result.ok
        ? `${result.title} — structure looks sound`
        : `${result.title} — opened with warnings`,
      tone
    )

    const summaryRows = Object.entries(result.summary || {})
      .map(
        ([label, value]) => `
        <div class="fact-list__row">
          <div class="fact-list__label">${escapeHtml(label)}</div>
          <div class="fact-list__value">${escapeHtml(value)}</div>
        </div>`
      )
      .join('')

    const issueList =
      result.issues && result.issues.length
        ? `<ul class="bullet-list">${result.issues.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
        : '<p class="ec-muted">No structural issues flagged by this lightweight checker.</p>'

    const contentsRows = (result.contents || [])
      .map(
        (c) => `
        <tr>
          <td>${escapeHtml(c.name)}</td>
          <td>${escapeHtml(c.role)}</td>
          <td>${escapeHtml(c.sizeLabel)}</td>
        </tr>`
      )
      .join('')

    const distinction = result.distinction
      ? `<p class="ec-detail">${escapeHtml(
          typeof result.distinction === 'string'
            ? result.distinction
            : result.distinction.summary || JSON.stringify(result.distinction)
        )}</p>`
      : ''

    resultsEl.innerHTML = `
      <article class="ec-card ec-card--${tone}">
        <h2>${escapeHtml(result.title)}</h2>
        <p class="ec-file">${escapeHtml(result.fileName || '')}</p>
        ${distinction}
        <h3>Manifest summary</h3>
        <div class="fact-list">${summaryRows}</div>
        <h3>Structure checks</h3>
        ${issueList}
        <h3>Contents</h3>
        <div class="ec-table-wrap">
          <table class="ec-table">
            <thead><tr><th>Name</th><th>Role</th><th>Size</th></tr></thead>
            <tbody>${contentsRows || '<tr><td colspan="3">No contents listed</td></tr>'}</tbody>
          </table>
        </div>
        <p class="ec-naming">
          Open TLA-185, TLA-EVID draft (<code>la.archive.audit-pack.v1</code>), and Archive Audit Pack (<code>.tlaa</code>) only.
          Commercial Landscape Archive Package (<code>.tla</code>) and encrypted <code>.lapkg</code> are refused.
          Local check ≠ Seal.
        </p>
      </article>
    `
  }

  function onFiles(fileList) {
    const file = fileList && fileList[0]
    if (!file) return
    inspectFile(file).catch((err) => {
      renderResult({
        ok: false,
        kind: 'error',
        title: 'Inspection failed',
        message: err && err.message ? err.message : String(err),
        detail: file.name
      })
    })
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => onFiles(fileInput.files))
  }

  if (dropzone) {
    ;['dragenter', 'dragover'].forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault()
        dropzone.classList.add('is-drag')
      })
    })
    ;['dragleave', 'drop'].forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault()
        dropzone.classList.remove('is-drag')
      })
    })
    dropzone.addEventListener('drop', (e) => {
      onFiles(e.dataTransfer && e.dataTransfer.files)
    })
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault()
      clearResults()
    })
  }
})()

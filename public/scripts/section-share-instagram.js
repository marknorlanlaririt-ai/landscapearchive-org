/**
 * Branded Instagram share cards for Foundation section share rows.
 * Instagram has no web URL scheme for Stories/Posts — users download a PNG
 * and upload manually. Also builds copy-ready captions with hashtags.
 *
 * Story packs: title → descriptor + highlighted quote slides → CTA.
 * Colours align with Ad Studio foundation-light (cream) + charcoal bars + mint accent.
 */
(function (global) {
  var THEME = {
    canvas: '#f5f4ef',
    ink: '#121212',
    inkSoft: 'rgba(18, 18, 18, 0.72)',
    inkMuted: 'rgba(18, 18, 18, 0.48)',
    accent: '#3f5a4a',
    accentStrong: '#2c4436',
    mint: '#bee2cf',
    mintSoft: 'rgba(190, 226, 207, 0.35)',
    bar: '#121212',
    barInk: '#f5f4ef',
    barMuted: 'rgba(245, 245, 242, 0.62)',
    line: 'rgba(18, 18, 18, 0.12)',
    fontSerif: "'Iowan Old Style', 'Palatino Linotype', Georgia, 'Times New Roman', serif",
    fontSans: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    kicker: 'The Landscape Archive Foundation',
    markPath: '/tla-foundation-mark.svg',
    siteHost: 'landscapearchive.org',
    hashtags: '#LandscapeArchitecture #OpenStandards #BIM #DigitalTwins #Metadata'
  }

  var FORMATS = {
    story: {
      width: 1080,
      height: 1920,
      padX: 88,
      headerH: 148,
      footerH: 168,
      contentTop: 188,
      contentBottom: 1760
    },
    post: {
      width: 1080,
      height: 1080,
      padX: 72,
      headerH: 108,
      footerH: 120,
      contentTop: 140,
      contentBottom: 940
    }
  }

  var markCache = null
  var fontsPromise = null
  var warmPromise = null

  function slugify(text) {
    return String(text || 'share')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 48) || 'share'
  }

  function shortUrl(shareUrl) {
    return String(shareUrl || '').replace(/^https?:\/\//, '')
  }

  /** Footer / on-canvas host only — never a runaway path. */
  function displayHost(shareUrl) {
    try {
      var host = new URL(String(shareUrl || ''), 'https://landscapearchive.org').hostname
      return (host || THEME.siteHost).replace(/^www\./, '') || THEME.siteHost
    } catch (err) {
      return THEME.siteHost
    }
  }

  function buildCaption(title, shareUrl) {
    return title + '\n\n' + shortUrl(shareUrl) + '\n\n' + THEME.hashtags
  }

  function wrapLines(ctx, text, maxWidth) {
    var words = String(text || '').split(/\s+/).filter(Boolean)
    var lines = []
    var line = ''
    for (var i = 0; i < words.length; i += 1) {
      var test = line ? line + ' ' + words[i] : words[i]
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line)
        line = words[i]
      } else {
        line = test
      }
    }
    if (line) lines.push(line)
    return lines
  }

  function drawLines(ctx, lines, x, y, lineHeight) {
    for (var i = 0; i < lines.length; i += 1) {
      ctx.fillText(lines[i], x, y + i * lineHeight)
    }
    return y + lines.length * lineHeight
  }

  function fitLines(ctx, text, maxWidth, maxLines, fontSpec) {
    ctx.font = fontSpec
    var lines = wrapLines(ctx, text, maxWidth)
    if (lines.length <= maxLines) return lines
    var trimmed = lines.slice(0, maxLines)
    var last = trimmed[maxLines - 1]
    while (last.length > 3 && ctx.measureText(last + '…').width > maxWidth) {
      last = last.slice(0, -1)
    }
    trimmed[maxLines - 1] = last + '…'
    return trimmed
  }

  function fitTitle(ctx, title, innerW, maxHeight, formatKey) {
    var maxSize = formatKey === 'story' ? 68 : 52
    var minSize = formatKey === 'story' ? 44 : 36
    for (var size = maxSize; size >= minSize; size -= 4) {
      var lineHeight = Math.round(size * 1.14)
      ctx.font = '600 ' + size + 'px ' + THEME.fontSerif
      var lines = wrapLines(ctx, title, innerW)
      if (lines.length * lineHeight <= maxHeight) {
        return { lines: lines, size: size, lineHeight: lineHeight }
      }
    }
    ctx.font = '600 ' + minSize + 'px ' + THEME.fontSerif
    var minLineHeight = Math.round(minSize * 1.14)
    var maxLines = Math.max(1, Math.floor(maxHeight / minLineHeight))
    return {
      lines: fitLines(ctx, title, innerW, maxLines, ctx.font),
      size: minSize,
      lineHeight: minLineHeight
    }
  }

  function createCanvas(width, height) {
    var canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    var ctx = canvas.getContext('2d', { alpha: false })
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    return { canvas: canvas, ctx: ctx }
  }

  function drawChrome(ctx, format, shareUrl, mark) {
    var w = format.width
    var h = format.height

    ctx.fillStyle = THEME.canvas
    ctx.fillRect(0, 0, w, h)

    // Header bar (charcoal)
    ctx.fillStyle = THEME.bar
    ctx.fillRect(0, 0, w, format.headerH)

    ctx.fillStyle = THEME.mint
    ctx.fillRect(0, format.headerH - 4, w, 4)

    ctx.fillStyle = THEME.barInk
    ctx.font = '600 26px ' + THEME.fontSans
    ctx.textBaseline = 'middle'
    ctx.fillText(THEME.kicker.toUpperCase(), format.padX, format.headerH / 2)

    // Footer bar (charcoal) — short host only
    var footerTop = h - format.footerH
    ctx.fillStyle = THEME.bar
    ctx.fillRect(0, footerTop, w, format.footerH)

    ctx.fillStyle = THEME.mint
    ctx.fillRect(0, footerTop, w, 4)

    var markSize = 44
    var footerMid = footerTop + format.footerH / 2
    var textX = format.padX
    if (mark) {
      // Cream disc so the dark Foundation mark stays legible on charcoal
      ctx.fillStyle = THEME.canvas
      ctx.beginPath()
      ctx.arc(format.padX + markSize / 2, footerMid, markSize / 2 + 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.drawImage(mark, format.padX, footerMid - markSize / 2, markSize, markSize)
      textX = format.padX + markSize + 24
    }

    ctx.fillStyle = THEME.barInk
    ctx.font = '600 28px ' + THEME.fontSans
    ctx.textBaseline = 'middle'
    ctx.fillText(displayHost(shareUrl), textX, footerMid)
  }

  function contentBox(format) {
    return {
      x: format.padX,
      y: format.contentTop,
      w: format.width - format.padX * 2,
      bottom: format.contentBottom
    }
  }

  function drawQuoteBlock(ctx, x, y, maxW, quote, maxLines) {
    var pad = 36
    var barW = 8
    var fontSpec = '500 36px ' + THEME.fontSans
    var lineHeight = 50
    ctx.font = fontSpec
    var lines = fitLines(ctx, quote, maxW - pad * 2 - barW - 16, maxLines, fontSpec)
    var blockH = pad * 2 + lines.length * lineHeight

    ctx.fillStyle = THEME.mintSoft
    ctx.fillRect(x, y, maxW, blockH)

    ctx.fillStyle = THEME.mint
    ctx.fillRect(x, y, barW, blockH)

    ctx.fillStyle = THEME.ink
    ctx.font = fontSpec
    ctx.textBaseline = 'top'
    drawLines(ctx, lines, x + pad + barW, y + pad, lineHeight)
    return y + blockH
  }

  function drawCard(ctx, formatKey, title, shareUrl, mark, options) {
    options = options || {}
    var format = FORMATS[formatKey] || FORMATS.post
    var box = contentBox(format)
    var bodyText =
      options.bodyText ||
      'A Foundation Field Note on institutions, standards, and open infrastructure.'

    drawChrome(ctx, format, shareUrl, mark)

    var y = box.y
    var titleFit = fitTitle(ctx, title, box.w, formatKey === 'story' ? 320 : 200, formatKey)
    ctx.fillStyle = THEME.ink
    ctx.font = '600 ' + titleFit.size + 'px ' + THEME.fontSerif
    ctx.textBaseline = 'top'
    y = drawLines(ctx, titleFit.lines, box.x, y, titleFit.lineHeight)
    y += 40

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 34px ' + THEME.fontSans
    var bodyMax = formatKey === 'story' ? 6 : 4
    var bodyBudget = Math.max(0, box.bottom - y - 24)
    var allowed = Math.min(bodyMax, Math.floor(bodyBudget / 46))
    if (allowed > 0) {
      drawLines(
        ctx,
        fitLines(ctx, bodyText, box.w, allowed, ctx.font),
        box.x,
        y,
        46
      )
    }
  }

  function drawQuoteSlide(ctx, format, title, descriptor, quote, shareUrl, mark) {
    var box = contentBox(format)
    drawChrome(ctx, format, shareUrl, mark)

    var y = box.y

    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 24px ' + THEME.fontSans
    ctx.textBaseline = 'top'
    y = drawLines(
      ctx,
      fitLines(ctx, String(title || '').toUpperCase(), box.w, 2, ctx.font),
      box.x,
      y,
      32
    )
    y += 28

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 32px ' + THEME.fontSans
    y = drawLines(
      ctx,
      fitLines(ctx, descriptor || 'From this Field Note', box.w, 3, ctx.font),
      box.x,
      y,
      44
    )
    y += 36

    var quoteBudget = box.bottom - y - 16
    var maxQuoteLines = Math.max(3, Math.min(8, Math.floor((quoteBudget - 72) / 50)))
    drawQuoteBlock(ctx, box.x, y, box.w, quote, maxQuoteLines)
  }

  function drawCtaSlide(ctx, format, title, shareUrl, mark) {
    var box = contentBox(format)
    drawChrome(ctx, format, shareUrl, mark)

    var y = box.y + (format.height >= 1600 ? 80 : 24)

    ctx.fillStyle = THEME.ink
    ctx.font = '600 56px ' + THEME.fontSerif
    ctx.textBaseline = 'top'
    y = drawLines(ctx, fitLines(ctx, title, box.w, 3, ctx.font), box.x, y, 66)
    y += 48

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 36px ' + THEME.fontSans
    y = drawLines(
      ctx,
      fitLines(ctx, 'Read the full section on ' + THEME.siteHost, box.w, 3, ctx.font),
      box.x,
      y,
      48
    )
    y += 40

    // Soft mint CTA band (typography only — not a fake button)
    var bandH = 72
    ctx.fillStyle = THEME.mintSoft
    ctx.fillRect(box.x, y, box.w, bandH)
    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 30px ' + THEME.fontSans
    ctx.textBaseline = 'middle'
    ctx.fillText(THEME.siteHost, box.x + 36, y + bandH / 2)
  }

  /**
   * Split a bullet into descriptor + quote without inventing claims.
   * Prefer em-dash / semicolon clause splits; else a neutral frame.
   */
  function splitDescriptorQuote(bullet) {
    var text = String(bullet || '').replace(/\s+/g, ' ').trim()
    if (!text) {
      return { descriptor: 'From this Field Note', quote: '' }
    }

    var dash = text.indexOf(' — ')
    if (dash > 12 && dash < text.length - 16) {
      return {
        descriptor: text.slice(0, dash).trim(),
        quote: text.slice(dash + 3).trim()
      }
    }

    var semi = text.indexOf('; ')
    if (semi > 12 && semi < text.length - 16) {
      return {
        descriptor: text.slice(0, semi).trim(),
        quote: text.slice(semi + 2).trim()
      }
    }

    return { descriptor: 'From this Field Note', quote: text }
  }

  function loadMark() {
    if (markCache) return Promise.resolve(markCache)
    return new Promise(function (resolve) {
      var img = new Image()
      img.onload = function () {
        markCache = img
        resolve(img)
      }
      img.onerror = function () {
        resolve(null)
      }
      img.src = THEME.markPath
    })
  }

  function ensureFonts() {
    if (fontsPromise) return fontsPromise
    if (!document.fonts || !document.fonts.load) {
      fontsPromise = Promise.resolve()
      return fontsPromise
    }
    var sans = THEME.fontSans.split(',')[0].replace(/'/g, '')
    // Load only the faces we paint with — do not await document.fonts.ready
    // (that waits for every page font and stalls the Share menu / pack).
    fontsPromise = Promise.all([
      document.fonts.load('600 56px ' + sans),
      document.fonts.load('400 34px ' + sans),
      document.fonts.load('600 72px Georgia')
    ]).catch(function () {})
    return fontsPromise
  }

  /** Prefetch fonts + mark so the first Share / pack click is not cold. */
  function warmAssets() {
    if (warmPromise) return warmPromise
    warmPromise = Promise.all([ensureFonts(), loadMark()]).then(function (parts) {
      return parts[1]
    })
    return warmPromise
  }

  function canvasToBlob(canvas) {
    return new Promise(function (resolve, reject) {
      if (canvas.width < 1 || canvas.height < 1) {
        reject(new Error('Invalid canvas dimensions'))
        return
      }
      canvas.toBlob(function (blob) {
        if (!blob) {
          reject(new Error('Could not create image'))
          return
        }
        resolve(blob)
      }, 'image/png')
    })
  }

  function triggerDownload(blob, filename) {
    var url = URL.createObjectURL(blob)
    var link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    window.setTimeout(function () {
      URL.revokeObjectURL(url)
    }, 1000)
  }

  function renderCardBlob(formatKey, title, shareUrl, mark, options) {
    var format = FORMATS[formatKey] || FORMATS.post
    var surface = createCanvas(format.width, format.height)
    drawCard(surface.ctx, formatKey, title, shareUrl, mark, options)
    return canvasToBlob(surface.canvas)
  }

  function introDescriptor(sectionContent) {
    sectionContent = sectionContent || {}
    var excerpts = sectionContent.excerpts || []
    if (excerpts.length) {
      var first = String(excerpts[0]).replace(/\s+/g, ' ').trim()
      if (first.length > 160) first = first.slice(0, 157).replace(/\s+\S*$/, '') + '…'
      return first
    }
    return 'A Foundation Field Note on institutions, standards, and open infrastructure.'
  }

  function buildStoryPackPlan(title, sectionContent) {
    sectionContent = sectionContent || {}
    var bullets = sectionContent.bullets || []
    var excerpts = sectionContent.excerpts || []
    var slides = [
      {
        type: 'intro',
        title: title,
        bodyText: introDescriptor(sectionContent)
      }
    ]

    if (bullets.length) {
      // Keep honesty / legal bullets in the pack (up to 4 quote slides)
      bullets.slice(0, 4).forEach(function (bullet) {
        var parts = splitDescriptorQuote(bullet)
        slides.push({
          type: 'quote',
          title: title,
          descriptor: parts.descriptor,
          quote: parts.quote
        })
      })
    } else if (excerpts.length) {
      excerpts.slice(0, 3).forEach(function (excerpt) {
        var text = String(excerpt).replace(/\s+/g, ' ').trim()
        var parts = splitDescriptorQuote(text)
        slides.push({
          type: 'quote',
          title: title,
          descriptor: parts.descriptor === 'From this Field Note' ? 'Key passage' : parts.descriptor,
          quote: parts.quote || text
        })
      })
    }

    slides.push({ type: 'cta', title: title })
    // intro + up to 4 quotes + cta
    return slides.slice(0, 6)
  }

  function crc32(bytes) {
    var table = crc32.table
    if (!table) {
      table = crc32.table = new Uint32Array(256)
      for (var i = 0; i < 256; i += 1) {
        var c = i
        for (var k = 0; k < 8; k += 1) {
          c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
        }
        table[i] = c >>> 0
      }
    }
    var crc = 0xffffffff
    for (var j = 0; j < bytes.length; j += 1) {
      crc = table[(crc ^ bytes[j]) & 0xff] ^ (crc >>> 8)
    }
    return (crc ^ 0xffffffff) >>> 0
  }

  function u16(n) {
    return new Uint8Array([n & 0xff, (n >>> 8) & 0xff])
  }

  function u32(n) {
    return new Uint8Array([n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff])
  }

  function concatParts(parts, totalLength) {
    var out = new Uint8Array(totalLength)
    var offset = 0
    for (var i = 0; i < parts.length; i += 1) {
      out.set(parts[i], offset)
      offset += parts[i].length
    }
    return out
  }

  function createZipBlob(files) {
    var encoder = new TextEncoder()
    var chunks = []
    var central = []
    var offset = 0

    return Promise.all(
      files.map(function (file) {
        return file.blob.arrayBuffer().then(function (buffer) {
          return { name: file.name, bytes: new Uint8Array(buffer) }
        })
      })
    ).then(function (entries) {
      for (var j = 0; j < entries.length; j += 1) {
        var entry = entries[j]
        var nameBytes = encoder.encode(entry.name)
        var size = entry.bytes.length
        var checksum = crc32(entry.bytes)
        var localHeader = concatParts(
          [
            u32(0x04034b50),
            u16(20),
            u16(0),
            u16(0),
            u16(0),
            u16(0),
            u32(checksum),
            u32(size),
            u32(size),
            u16(nameBytes.length),
            u16(0),
            nameBytes,
            entry.bytes
          ],
          30 + nameBytes.length + size
        )
        chunks.push(localHeader)

        var centralHeader = concatParts(
          [
            u32(0x02014b50),
            u16(20),
            u16(20),
            u16(0),
            u16(0),
            u16(0),
            u16(0),
            u32(checksum),
            u32(size),
            u32(size),
            u16(nameBytes.length),
            u16(0),
            u16(0),
            u16(0),
            u16(0),
            u32(0),
            u32(offset),
            nameBytes
          ],
          46 + nameBytes.length
        )
        central.push(centralHeader)
        offset += localHeader.length
      }

      var centralSize = central.reduce(function (sum, part) {
        return sum + part.length
      }, 0)
      var centralOffset = offset
      var end = concatParts(
        [
          u32(0x06054b50),
          u16(0),
          u16(0),
          u16(entries.length),
          u16(entries.length),
          u32(centralSize),
          u32(centralOffset),
          u16(0)
        ],
        22
      )

      return new Blob(chunks.concat(central, [end]), { type: 'application/zip' })
    })
  }

  function renderStorySlideBlob(slide, shareUrl, mark) {
    var format = FORMATS.story
    var surface = createCanvas(format.width, format.height)
    if (slide.type === 'quote') {
      drawQuoteSlide(
        surface.ctx,
        format,
        slide.title,
        slide.descriptor,
        slide.quote,
        shareUrl,
        mark
      )
    } else if (slide.type === 'cta') {
      drawCtaSlide(surface.ctx, format, slide.title, shareUrl, mark)
    } else {
      drawCard(surface.ctx, 'story', slide.title, shareUrl, mark, { bodyText: slide.bodyText })
    }
    return canvasToBlob(surface.canvas)
  }

  function extractSectionContent(shareRoot) {
    var section = shareRoot && shareRoot.closest ? shareRoot.closest('.section-block') : null
    var bullets = []
    var excerpts = []
    if (!section) return { bullets: bullets, excerpts: excerpts }

    section.querySelectorAll('.bullet-list li').forEach(function (li) {
      var text = String(li.textContent || '').replace(/\s+/g, ' ').trim()
      if (text) bullets.push(text)
    })

    section.querySelectorAll('.prose p').forEach(function (p) {
      if (p.closest('.section-share')) return
      var text = String(p.textContent || '').replace(/\s+/g, ' ').trim()
      if (text.length > 24) excerpts.push(text)
    })

    return { bullets: bullets.slice(0, 8), excerpts: excerpts.slice(0, 3) }
  }

  function downloadCard(formatKey, shareUrl, title) {
    return warmAssets().then(function (mark) {
      return renderCardBlob(formatKey, title, shareUrl, mark)
    }).then(function (blob) {
      triggerDownload(blob, 'tla-foundation-' + formatKey + '-' + slugify(title) + '.png')
    })
  }

  /**
   * ZIP of PNG story slides (not a PDF). options.onProgress(done, total) optional.
   */
  function downloadStoryPack(shareUrl, title, sectionContent, options) {
    options = options || {}
    var onProgress = typeof options.onProgress === 'function' ? options.onProgress : null
    var slides = buildStoryPackPlan(title, sectionContent)
    var total = slides.length
    var done = 0

    return warmAssets()
      .then(function (mark) {
        // Parallel slide renders — sequential canvas work was the main pack lag.
        return Promise.all(
          slides.map(function (slide, index) {
            return renderStorySlideBlob(slide, shareUrl, mark).then(function (blob) {
              done += 1
              if (onProgress) onProgress(done, total)
              return {
                name: 'tla-story-' + String(index + 1).padStart(2, '0') + '.png',
                blob: blob
              }
            })
          })
        )
      })
      .then(createZipBlob)
      .then(function (zipBlob) {
        triggerDownload(zipBlob, 'tla-foundation-story-pack-' + slugify(title) + '.zip')
      })
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text)
    }
    return new Promise(function (resolve, reject) {
      var input = document.createElement('textarea')
      input.value = text
      input.setAttribute('readonly', '')
      input.style.position = 'absolute'
      input.style.left = '-9999px'
      document.body.appendChild(input)
      input.select()
      try {
        document.execCommand('copy')
        resolve()
      } catch (err) {
        reject(err)
      }
      input.remove()
    })
  }

  function copyCaption(title, shareUrl) {
    return copyText(buildCaption(title, shareUrl))
  }

  global.TlaSectionShareInstagram = {
    downloadCard: downloadCard,
    downloadStoryPack: downloadStoryPack,
    extractSectionContent: extractSectionContent,
    buildCaption: buildCaption,
    copyCaption: copyCaption,
    buildStoryPackPlan: buildStoryPackPlan,
    warmAssets: warmAssets
  }
})(typeof window !== 'undefined' ? window : globalThis)

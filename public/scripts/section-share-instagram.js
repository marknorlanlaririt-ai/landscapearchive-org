/**
 * Branded Instagram share cards for Foundation section share rows.
 * Instagram has no web URL scheme for Stories/Posts — users download a PNG
 * and upload manually. Also builds copy-ready captions with hashtags.
 */
(function (global) {
  var THEME = {
    canvas: '#ffffff',
    ink: '#1c1f22',
    inkSoft: '#4a4f55',
    inkMuted: '#6b7178',
    accent: '#3f5a4a',
    accentStrong: '#2c4436',
    line: 'rgba(28, 31, 34, 0.12)',
    fontSerif: "'Iowan Old Style', 'Palatino Linotype', Georgia, 'Times New Roman', serif",
    fontSans: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    kicker: 'The Landscape Archive Foundation',
    markPath: '/tla-foundation-mark.svg',
    hashtags: '#LandscapeArchitecture #OpenStandards #BIM #DigitalTwins #Metadata'
  }

  var FORMATS = {
    story: { width: 1080, height: 1920, padTop: 132, padX: 92, padBottom: 240 },
    post: { width: 1080, height: 1080, padTop: 88, padX: 92, padBottom: 160 }
  }

  var STORY_SAFE_BOTTOM = 280

  var markCache = null

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

  function fitLines(ctx, text, maxWidth, maxLines, fontSpec, lineHeight) {
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
    var maxSize = formatKey === 'story' ? 72 : 58
    var minSize = formatKey === 'story' ? 48 : 42
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
      lines: fitLines(ctx, title, innerW, maxLines, ctx.font, minLineHeight),
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

  function drawHeaderRule(ctx, format) {
    ctx.strokeStyle = THEME.line
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(format.padX, format.padTop - 28)
    ctx.lineTo(format.width - format.padX, format.padTop - 28)
    ctx.stroke()
  }

  function drawKicker(ctx, format, y) {
    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 28px ' + THEME.fontSans
    ctx.textBaseline = 'top'
    ctx.fillText(THEME.kicker.toUpperCase(), format.padX, y)
    return y + 52
  }

  function drawFooter(ctx, format, shareUrl, mark, footerTop) {
    var w = format.width
    var innerW = w - format.padX * 2
    var footerY = Math.min(footerTop, format.height - format.padBottom)

    ctx.strokeStyle = THEME.line
    ctx.beginPath()
    ctx.moveTo(format.padX, footerY)
    ctx.lineTo(w - format.padX, footerY)
    ctx.stroke()

    var contentY = footerY + 28
    if (mark) {
      ctx.drawImage(mark, format.padX, contentY, 48, 48)
    }

    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 30px ' + THEME.fontSans
    var urlLines = fitLines(
      ctx,
      shortUrl(shareUrl),
      innerW - (mark ? 64 : 0),
      format.height >= 1600 ? 2 : 1,
      ctx.font,
      38
    )
    drawLines(ctx, urlLines, format.padX + (mark ? 64 : 0), contentY + 6, 38)

    return footerY
  }

  function drawCard(ctx, formatKey, title, shareUrl, mark, options) {
    options = options || {}
    var format = FORMATS[formatKey] || FORMATS.post
    var w = format.width
    var h = format.height
    var innerW = w - format.padX * 2
    var bodyText = options.bodyText || 'Read the full section at ' + shortUrl(shareUrl)
    var footerReserve = formatKey === 'story' ? STORY_SAFE_BOTTOM : 132
    var footerTop = h - footerReserve

    ctx.fillStyle = THEME.canvas
    ctx.fillRect(0, 0, w, h)

    drawHeaderRule(ctx, format)

    var y = drawKicker(ctx, format, format.padTop)

    var titleBudget = footerTop - y - 120
    var titleFit = fitTitle(ctx, title, innerW, Math.max(120, titleBudget), formatKey)
    ctx.fillStyle = THEME.ink
    ctx.font = '600 ' + titleFit.size + 'px ' + THEME.fontSerif
    y = drawLines(ctx, titleFit.lines, format.padX, y, titleFit.lineHeight)
    y += 36

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 34px ' + THEME.fontSans
    var bodyLines = wrapLines(ctx, bodyText, innerW)
    var bodyMaxLines = formatKey === 'story' ? 8 : 4
    var bodyBudget = Math.max(0, footerTop - y - 24)
    var bodyLineHeight = 46
    var allowedBodyLines = Math.min(bodyMaxLines, Math.floor(bodyBudget / bodyLineHeight))
    if (allowedBodyLines > 0) {
      y = drawLines(
        ctx,
        fitLines(ctx, bodyText, innerW, allowedBodyLines, ctx.font, bodyLineHeight),
        format.padX,
        y,
        bodyLineHeight
      )
    }

    drawFooter(ctx, format, shareUrl, mark, footerTop)
  }

  function drawBulletSlide(ctx, format, heading, bullets, shareUrl, mark) {
    var innerW = format.width - format.padX * 2
    var footerTop = format.height - STORY_SAFE_BOTTOM

    ctx.fillStyle = THEME.canvas
    ctx.fillRect(0, 0, format.width, format.height)
    drawHeaderRule(ctx, format)

    var y = drawKicker(ctx, format, format.padTop)

    ctx.fillStyle = THEME.ink
    ctx.font = '600 52px ' + THEME.fontSerif
    y = drawLines(ctx, fitLines(ctx, heading, innerW, 2, ctx.font, 60), format.padX, y, 60)
    y += 40

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 36px ' + THEME.fontSans
    for (var i = 0; i < bullets.length; i += 1) {
      var bulletLines = fitLines(ctx, bullets[i], innerW - 56, 3, ctx.font, 48)
      ctx.fillStyle = THEME.accentStrong
      ctx.fillText('•', format.padX, y + 4)
      ctx.fillStyle = THEME.inkSoft
      y = drawLines(ctx, bulletLines, format.padX + 36, y, 48) + 20
      if (y > footerTop - 80) break
    }

    drawFooter(ctx, format, shareUrl, mark, footerTop)
  }

  function drawCtaSlide(ctx, format, title, shareUrl, mark) {
    var innerW = format.width - format.padX * 2
    var footerTop = format.height - STORY_SAFE_BOTTOM

    ctx.fillStyle = THEME.canvas
    ctx.fillRect(0, 0, format.width, format.height)
    drawHeaderRule(ctx, format)

    var y = drawKicker(ctx, format, format.padTop + 120)

    ctx.fillStyle = THEME.ink
    ctx.font = '600 64px ' + THEME.fontSerif
    y = drawLines(ctx, fitLines(ctx, title, innerW, 3, ctx.font, 74), format.padX, y, 74)
    y += 48

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 38px ' + THEME.fontSans
    y = drawLines(
      ctx,
      fitLines(ctx, 'Read the full section on landscapearchive.org', innerW, 3, ctx.font, 52),
      format.padX,
      y,
      52
    )

    drawFooter(ctx, format, shareUrl, mark, footerTop)
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
    if (!document.fonts || !document.fonts.load) return Promise.resolve()
    return Promise.all([
      document.fonts.load('600 56px ' + THEME.fontSans.split(',')[0].replace(/'/g, '')),
      document.fonts.load('400 34px ' + THEME.fontSans.split(',')[0].replace(/'/g, '')),
      document.fonts.load('600 72px Georgia')
    ]).catch(function () {}).then(function () {
      return document.fonts.ready
    })
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

  function chunkBullets(bullets, size) {
    var groups = []
    for (var i = 0; i < bullets.length; i += size) {
      groups.push(bullets.slice(i, i + size))
    }
    return groups
  }

  function buildStoryPackPlan(title, sectionContent) {
    sectionContent = sectionContent || {}
    var bullets = sectionContent.bullets || []
    var excerpts = sectionContent.excerpts || []
    var slides = [{ type: 'intro', title: title }]

    if (bullets.length) {
      chunkBullets(bullets, 3).forEach(function (group) {
        slides.push({ type: 'bullets', heading: title, bullets: group })
      })
    } else if (excerpts.length) {
      excerpts.slice(0, 2).forEach(function (excerpt) {
        slides.push({ type: 'intro', title: title, bodyText: excerpt })
      })
    }

    slides.push({ type: 'cta', title: title })
    return slides.slice(0, 5)
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
    if (slide.type === 'bullets') {
      drawBulletSlide(surface.ctx, format, slide.heading, slide.bullets, shareUrl, mark)
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
    return ensureFonts()
      .then(loadMark)
      .then(function (mark) {
        return renderCardBlob(formatKey, title, shareUrl, mark)
      })
      .then(function (blob) {
        triggerDownload(blob, 'tla-foundation-' + formatKey + '-' + slugify(title) + '.png')
      })
  }

  function downloadStoryPack(shareUrl, title, sectionContent) {
    var slides = buildStoryPackPlan(title, sectionContent)
    return ensureFonts()
      .then(loadMark)
      .then(function (mark) {
        return slides.reduce(function (chain, slide, index) {
          return chain.then(function (entries) {
            return renderStorySlideBlob(slide, shareUrl, mark).then(function (blob) {
              entries.push({
                name: 'tla-story-' + String(index + 1).padStart(2, '0') + '.png',
                blob: blob
              })
              return entries
            })
          })
        }, Promise.resolve([]))
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
    copyCaption: copyCaption
  }
})(typeof window !== 'undefined' ? window : globalThis)

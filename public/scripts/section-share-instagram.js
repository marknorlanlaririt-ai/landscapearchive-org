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
    story: { width: 1080, height: 1920, padTop: 132, padX: 92, padBottom: 108 },
    post: { width: 1080, height: 1080, padTop: 88, padX: 92, padBottom: 80 }
  }

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

  function drawCard(ctx, formatKey, title, shareUrl, mark) {
    var format = FORMATS[formatKey] || FORMATS.post
    var w = format.width
    var h = format.height
    var innerW = w - format.padX * 2

    ctx.fillStyle = THEME.canvas
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = THEME.line
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(format.padX, format.padTop - 28)
    ctx.lineTo(w - format.padX, format.padTop - 28)
    ctx.stroke()

    var y = format.padTop

    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 28px ' + THEME.fontSans
    ctx.textBaseline = 'top'
    ctx.fillText(THEME.kicker.toUpperCase(), format.padX, y)
    y += 52

    ctx.fillStyle = THEME.ink
    var titleSize = formatKey === 'story' ? 72 : 58
    ctx.font = '600 ' + titleSize + 'px ' + THEME.fontSerif
    var titleLines = wrapLines(ctx, title, innerW)
    var titleLineHeight = formatKey === 'story' ? 82 : 68
    y = drawLines(ctx, titleLines.slice(0, formatKey === 'story' ? 6 : 4), format.padX, y, titleLineHeight)
    y += 36

    ctx.fillStyle = THEME.inkSoft
    ctx.font = '400 34px ' + THEME.fontSans
    var body = 'Read the full section at ' + shortUrl(shareUrl)
    var bodyLines = wrapLines(ctx, body, innerW)
    y = drawLines(ctx, bodyLines.slice(0, formatKey === 'story' ? 5 : 3), format.padX, y, 46)

    var footerY = h - format.padBottom
    ctx.strokeStyle = THEME.line
    ctx.beginPath()
    ctx.moveTo(format.padX, footerY - 56)
    ctx.lineTo(w - format.padX, footerY - 56)
    ctx.stroke()

    if (mark) {
      ctx.drawImage(mark, format.padX, footerY - 44, 48, 48)
    }

    ctx.fillStyle = THEME.accentStrong
    ctx.font = '600 30px ' + THEME.fontSans
    ctx.fillText(shortUrl(shareUrl), format.padX + (mark ? 64 : 0), footerY - 8)

    ctx.fillStyle = THEME.inkMuted
    ctx.font = '400 24px ' + THEME.fontSans
    ctx.fillText('Save image · paste caption · upload to Instagram', format.padX, footerY + 28)
  }

  function downloadCard(formatKey, shareUrl, title) {
    return ensureFonts()
      .then(loadMark)
      .then(function (mark) {
        var format = FORMATS[formatKey] || FORMATS.post
        var canvas = document.createElement('canvas')
        canvas.width = format.width
        canvas.height = format.height
        var ctx = canvas.getContext('2d')
        drawCard(ctx, formatKey, title, shareUrl, mark)

        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) {
              reject(new Error('Could not create image'))
              return
            }
            var url = URL.createObjectURL(blob)
            var link = document.createElement('a')
            link.href = url
            link.download = 'tla-foundation-' + formatKey + '-' + slugify(title) + '.png'
            link.click()
            window.setTimeout(function () {
              URL.revokeObjectURL(url)
            }, 1000)
            resolve()
          }, 'image/png')
        })
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
    buildCaption: buildCaption,
    copyCaption: copyCaption
  }
})(typeof window !== 'undefined' ? window : globalThis)

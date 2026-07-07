/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Random bright grid cells settle to --accent-strong (#343d4a) on load.
 * Dispatches foundation-pixel-chrome-readable (~1.4s) then
 * foundation-pixel-chrome-settled (~3s) for staggered text reveal.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var CELL_SIZE = 14
  var MAX_DELAY_MS = 2200
  var TRANSITION_MS = 720
  var READABLE_MS = 1400
  var MAX_CELLS = 640
  var PALETTE = [
    '#e6194b',
    '#3cb44b',
    '#ffe119',
    '#4363d8',
    '#f58231',
    '#911eb4',
    '#46f0f0',
    '#f032e6',
    '#bcf60c',
    '#fabebe',
    '#008080',
    '#e6beff',
    '#9a6324',
    '#fffac8',
    '#800000',
    '#aaffc3',
    '#808000',
    '#ffd8b1',
    '#000075',
    '#808080'
  ]

  function randomColor() {
    return PALETTE[(Math.random() * PALETTE.length) | 0]
  }

  function finishImmediately() {
    document.documentElement.classList.add('pixel-chrome--done')
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-readable'))
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))
  }

  function createMosaic(host) {
    var rect = host.getBoundingClientRect()
    var width = Math.max(rect.width, host.offsetWidth, 1)
    var height = Math.max(rect.height, host.offsetHeight, 1)
    var cols = Math.max(1, Math.ceil(width / CELL_SIZE))
    var rows = Math.max(1, Math.ceil(height / CELL_SIZE))
    var count = cols * rows

    if (count > MAX_CELLS) {
      var scale = Math.sqrt(count / MAX_CELLS)
      cols = Math.max(1, Math.ceil(cols / scale))
      rows = Math.max(1, Math.ceil(rows / scale))
      count = cols * rows
    }

    var mosaic = document.createElement('div')
    mosaic.className = 'pixel-chrome__mosaic'
    mosaic.setAttribute('aria-hidden', 'true')
    mosaic.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)'
    mosaic.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)'

    var fragment = document.createDocumentFragment()
    for (var i = 0; i < count; i++) {
      var cell = document.createElement('span')
      cell.className = 'pixel-chrome__cell'
      cell.style.setProperty('--pixel-color', randomColor())
      cell.style.setProperty('--pixel-delay', String((Math.random() * MAX_DELAY_MS) | 0) + 'ms')
      fragment.appendChild(cell)
    }
    mosaic.appendChild(fragment)
    host.appendChild(mosaic)
    return mosaic
  }

  function settleMosaic(mosaic) {
    var cells = mosaic.querySelectorAll('.pixel-chrome__cell')
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.add('is-settling')
    }
  }

  function init() {
    if (!document.documentElement.matches('[data-pixel-chrome="1"]')) {
      return
    }

    if (REDUCED.matches) {
      finishImmediately()
      return
    }

    document.documentElement.classList.add('pixel-chrome--active')

    var hosts = document.querySelectorAll(CHROME_TARGETS)
    var mosaics = []
    for (var i = 0; i < hosts.length; i++) {
      var mosaic = createMosaic(hosts[i])
      if (mosaic) {
        mosaics.push(mosaic)
      }
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        for (var j = 0; j < mosaics.length; j++) {
          settleMosaic(mosaics[j])
        }
      })
    })

    window.setTimeout(function () {
      window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-readable'))
    }, READABLE_MS)

    window.setTimeout(function () {
      for (var k = 0; k < mosaics.length; k++) {
        if (mosaics[k].parentNode) {
          mosaics[k].parentNode.removeChild(mosaics[k])
        }
      }
      document.documentElement.classList.remove('pixel-chrome--active')
      document.documentElement.classList.add('pixel-chrome--done')
      window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))
    }, MAX_DELAY_MS + TRANSITION_MS + 80)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()

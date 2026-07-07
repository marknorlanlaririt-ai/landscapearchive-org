/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Muted grid cells settle to --accent-strong (#343d4a) on load.
 * Dispatches foundation-pixel-chrome-readable (~1.2s) then
 * foundation-pixel-chrome-settled (~2.8s) for staggered text reveal.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var CELL_SIZE = 5
  var MAX_DELAY_MS = 2000
  var TRANSITION_MS = 680
  var READABLE_MS = 1200
  var MAX_CELLS = 4500
  var PALETTE = [
    '#8a96a3',
    '#9aa5b0',
    '#6d7a87',
    '#b8a4a4',
    '#c4abab',
    '#9da896',
    '#a8b5a3',
    '#7d858d',
    '#929fa8',
    '#b0a8a0',
    '#8491a0',
    '#a39494',
    '#95a092',
    '#8b9399',
    '#a39ea8',
    '#8f9a8e'
  ]

  function randomColor() {
    return PALETTE[(Math.random() * PALETTE.length) | 0]
  }

  function finishImmediately() {
    document.documentElement.classList.add('pixel-chrome--done')
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-readable'))
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))
  }

  function measureHost(host) {
    var rect = host.getBoundingClientRect()
    return {
      width: Math.max(Math.round(rect.width), host.offsetWidth, 1),
      height: Math.max(Math.round(rect.height), host.offsetHeight, 1)
    }
  }

  function gridForSize(width, height) {
    var cellSize = CELL_SIZE
    var cols = Math.max(1, Math.ceil(width / cellSize))
    var rows = Math.max(1, Math.ceil(height / cellSize))
    var count = cols * rows

    if (count > MAX_CELLS) {
      cellSize = Math.max(
        CELL_SIZE,
        Math.ceil(Math.sqrt((width * height) / MAX_CELLS))
      )
      cols = Math.max(1, Math.ceil(width / cellSize))
      rows = Math.max(1, Math.ceil(height / cellSize))
      count = cols * rows
    }

    return { cols: cols, rows: rows, count: count, cellSize: cellSize }
  }

  function createMosaic(host) {
    var size = measureHost(host)
    var grid = gridForSize(size.width, size.height)

    var mosaic = document.createElement('div')
    mosaic.className = 'pixel-chrome__mosaic'
    mosaic.setAttribute('aria-hidden', 'true')
    mosaic.style.gridTemplateColumns =
      'repeat(' + grid.cols + ', ' + grid.cellSize + 'px)'
    mosaic.style.gridTemplateRows =
      'repeat(' + grid.rows + ', ' + grid.cellSize + 'px)'

    var fragment = document.createDocumentFragment()
    for (var i = 0; i < grid.count; i++) {
      var cell = document.createElement('span')
      cell.className = 'pixel-chrome__cell'
      cell.style.setProperty('--pixel-color', randomColor())
      cell.style.setProperty(
        '--pixel-delay',
        String((Math.random() * MAX_DELAY_MS) | 0) + 'ms'
      )
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

/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Desaturated grid cells settle to --accent-strong (#343d4a), then ambient localized waves.
 * Dispatches foundation-pixel-chrome-readable (~1.2s) then
 * foundation-pixel-chrome-settled (~2.8s) for staggered text reveal.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var CELL_SIZE = 5
  var CHROME_BASE = '#343d4a'
  var MAX_DELAY_MS = 2000
  var TRANSITION_MS = 680
  var READABLE_MS = 1200
  var SETTLE_MS = MAX_DELAY_MS + TRANSITION_MS + 80
  var MAX_CELLS = 4500
  var MAX_WAVE_CELLS = 64
  var WAVE_SLICE_MIN = 0.2
  var WAVE_SLICE_MAX = 0.3
  var WAVE_PAUSE_MIN = 2000
  var WAVE_PAUSE_MAX = 5000
  var WAVE_STAGGER_MS = 300
  var WAVE_FADE_MS = 380

  // Cool slate / blue-gray / muted lavender-gray near #343d4a (low saturation)
  var PALETTE = [
    '#2a323c',
    '#2e3640',
    '#303842',
    '#323a44',
    '#343d4a',
    '#36404c',
    '#38424e',
    '#3a4550',
    '#3c4752',
    '#3e4a56',
    '#404c58',
    '#424e5a',
    '#3d444f',
    '#404750',
    '#434a55',
    '#3a4049',
    '#3f4650',
    '#444b55',
    '#485460',
    '#4c5866',
    '#505a68',
    '#46515d',
    '#4a5563'
  ]

  var ambientTimer = null
  var ambientStopped = false
  var activeMosaics = []

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
    mosaic.__pixelGrid = grid

    var fragment = document.createDocumentFragment()
    var index = 0
    for (var row = 0; row < grid.rows; row++) {
      for (var col = 0; col < grid.cols; col++) {
        var cell = document.createElement('span')
        cell.className = 'pixel-chrome__cell'
        cell.__col = col
        cell.__row = row
        cell.style.setProperty('--pixel-color', randomColor())
        cell.style.setProperty(
          '--pixel-delay',
          String((Math.random() * MAX_DELAY_MS) | 0) + 'ms'
        )
        fragment.appendChild(cell)
        index++
        if (index >= grid.count) {
          break
        }
      }
      if (index >= grid.count) {
        break
      }
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

  function settleToBase(mosaic) {
    var cells = mosaic.querySelectorAll('.pixel-chrome__cell')
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.remove('is-settling')
      cells[i].classList.add('is-ambient-base')
      cells[i].style.removeProperty('--pixel-color')
      cells[i].style.removeProperty('--pixel-delay')
    }
  }

  function pickWaveRegion(grid) {
    var sliceWidth =
      WAVE_SLICE_MIN + Math.random() * (WAVE_SLICE_MAX - WAVE_SLICE_MIN)
    var colSpan = Math.max(2, Math.round(grid.cols * sliceWidth))
    var startCol = (Math.random() * Math.max(1, grid.cols - colSpan)) | 0
    var rowSpan = Math.max(
      2,
      Math.round(grid.rows * (0.35 + Math.random() * 0.45))
    )
    var startRow = (Math.random() * Math.max(1, grid.rows - rowSpan)) | 0
    return { startCol: startCol, colSpan: colSpan, startRow: startRow, rowSpan: rowSpan }
  }

  function cellsInRegion(mosaic, region) {
    var grid = mosaic.__pixelGrid
    var cells = mosaic.querySelectorAll('.pixel-chrome__cell')
    var picked = []

    for (var r = region.startRow; r < region.startRow + region.rowSpan; r++) {
      for (var c = region.startCol; c < region.startCol + region.colSpan; c++) {
        var idx = r * grid.cols + c
        if (idx < cells.length) {
          picked.push(cells[idx])
        }
      }
    }

    if (picked.length > MAX_WAVE_CELLS) {
      for (var i = picked.length - 1; i > 0; i--) {
        var j = (Math.random() * (i + 1)) | 0
        var tmp = picked[i]
        picked[i] = picked[j]
        picked[j] = tmp
      }
      picked = picked.slice(0, MAX_WAVE_CELLS)
    }

    return picked
  }

  function runWave(mosaic) {
    if (!mosaic || !mosaic.__pixelGrid || !mosaic.parentNode) {
      return
    }

    var cells = cellsInRegion(mosaic, pickWaveRegion(mosaic.__pixelGrid))
    if (!cells.length) {
      return
    }

    var rtl = Math.random() > 0.5
    cells.sort(function (a, b) {
      return rtl ? b.__col - a.__col : a.__col - b.__col
    })

    for (var i = 0; i < cells.length; i++) {
      ;(function (cell, delay) {
        window.setTimeout(function () {
          if (!cell.isConnected) {
            return
          }
          cell.classList.add('is-ambient-wave')
          cell.style.setProperty('--pixel-wave-color', randomColor())
          window.setTimeout(function () {
            cell.classList.remove('is-ambient-wave')
            cell.style.removeProperty('--pixel-wave-color')
          }, WAVE_FADE_MS)
        }, delay)
      })(cells[i], ((i / Math.max(cells.length - 1, 1)) * WAVE_STAGGER_MS) | 0)
    }
  }

  function scheduleNextWave() {
    if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
      return
    }

    var pause =
      WAVE_PAUSE_MIN + Math.random() * (WAVE_PAUSE_MAX - WAVE_PAUSE_MIN)
    ambientTimer = window.setTimeout(function () {
      if (ambientStopped || document.hidden) {
        scheduleNextWave()
        return
      }

      var live = []
      for (var i = 0; i < activeMosaics.length; i++) {
        if (activeMosaics[i].parentNode) {
          live.push(activeMosaics[i])
        }
      }
      activeMosaics = live

      if (live.length) {
        runWave(live[(Math.random() * live.length) | 0])
      }

      scheduleNextWave()
    }, pause)
  }

  function enterAmbient(mosaics) {
    document.documentElement.classList.remove('pixel-chrome--active')
    document.documentElement.classList.add('pixel-chrome--done', 'pixel-chrome--ambient')
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))

    for (var i = 0; i < mosaics.length; i++) {
      settleToBase(mosaics[i])
    }

    activeMosaics = mosaics.slice()
    scheduleNextWave()
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
      enterAmbient(mosaics)
    }, SETTLE_MS)
  }

  document.addEventListener('visibilitychange', function () {
    if (
      !document.hidden &&
      document.documentElement.classList.contains('pixel-chrome--ambient') &&
      !ambientTimer
    ) {
      scheduleNextWave()
    }
  })

  REDUCED.addEventListener('change', function () {
    if (REDUCED.matches) {
      ambientStopped = true
      if (ambientTimer) {
        window.clearTimeout(ambientTimer)
        ambientTimer = null
      }
      finishImmediately()
    }
  })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()

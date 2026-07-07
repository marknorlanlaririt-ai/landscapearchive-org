/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Desaturated grid cells settle to --accent-strong (#343d4a), then ambient patch waves.
 * Dispatches foundation-pixel-chrome-readable (~1.2s) then
 * foundation-pixel-chrome-settled (~2.8s) for staggered text reveal.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var CELL_SIZE = 5
  var CHROME_BASE = '#343d4a'
  var CHROME_HUE = 215
  var CHROME_SAT = 0.1
  var CHROME_LIGHT = 0.247
  var LIGHTNESS_JITTER = 0.06
  var WAVE_LIGHTNESS_JITTER = 0.09
  var MAX_DELAY_MS = 2000
  var TRANSITION_MS = 680
  var READABLE_MS = 1200
  var SETTLE_MS = MAX_DELAY_MS + TRANSITION_MS + 80
  var MAX_CELLS = 4500
  var MAX_PATCH_CELLS = 140
  var PATCH_SLICE_MIN = 0.15
  var PATCH_SLICE_MAX = 0.25
  var PATCHES_PER_BURST = 3
  var PATCH_STAGGER_MS = 180
  var WAVE_DURATION_MIN = 150
  var WAVE_DURATION_MAX = 600
  var WAVE_DELAY_MAX = 220
  var BURST_PAUSE_MIN = 700
  var BURST_PAUSE_MAX = 1600
  var AMBIENT_LOOP_OFFSET_MS = 900

  var ambientTimers = []
  var ambientStopped = false
  var activeMosaics = []

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value))
  }

  function hslToHex(h, s, l) {
    var c = (1 - Math.abs(2 * l - 1)) * s
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    var m = l - c / 2
    var r = 0
    var g = 0
    var b = 0

    if (h < 60) {
      r = c
      g = x
    } else if (h < 120) {
      r = x
      g = c
    } else if (h < 180) {
      g = c
      b = x
    } else if (h < 240) {
      g = x
      b = c
    } else if (h < 300) {
      r = x
      b = c
    } else {
      r = c
      b = x
    }

    function toByte(channel) {
      return Math.round((channel + m) * 255)
        .toString(16)
        .padStart(2, '0')
    }

    return '#' + toByte(r) + toByte(g) + toByte(b)
  }

  function paletteColor(lightnessJitter) {
    var jitter = lightnessJitter || LIGHTNESS_JITTER
    var l = clamp(
      CHROME_LIGHT + (Math.random() * 2 - 1) * jitter,
      0.19,
      0.33
    )
    return hslToHex(CHROME_HUE, CHROME_SAT, l)
  }

  function waveColor() {
    return paletteColor(WAVE_LIGHTNESS_JITTER)
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
    var cols = Math.max(1, Math.ceil(width / CELL_SIZE))
    var rows = Math.max(1, Math.ceil(height / CELL_SIZE))
    var total = cols * rows
    var stride = 1

    if (total > MAX_CELLS) {
      stride = Math.ceil(Math.sqrt(total / MAX_CELLS))
    }

    var placements = []
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        if (row % stride === 0 && col % stride === 0) {
          placements.push({ col: col, row: row })
        }
      }
    }

    if (placements.length > MAX_CELLS) {
      placements = placements.slice(0, MAX_CELLS)
    }

    return {
      cols: cols,
      rows: rows,
      count: placements.length,
      cellSize: CELL_SIZE,
      stride: stride,
      placements: placements
    }
  }

  function createMosaic(host) {
    var size = measureHost(host)
    var grid = gridForSize(size.width, size.height)

    var mosaic = document.createElement('div')
    mosaic.className = 'pixel-chrome__mosaic'
    mosaic.setAttribute('aria-hidden', 'true')
    mosaic.style.gridTemplateColumns =
      'repeat(' + grid.cols + ', ' + CELL_SIZE + 'px)'
    mosaic.style.gridTemplateRows =
      'repeat(' + grid.rows + ', ' + CELL_SIZE + 'px)'
    mosaic.__pixelGrid = grid

    var fragment = document.createDocumentFragment()
    for (var i = 0; i < grid.placements.length; i++) {
      var placement = grid.placements[i]
      var cell = document.createElement('span')
      cell.className = 'pixel-chrome__cell'
      cell.__col = placement.col
      cell.__row = placement.row
      cell.style.gridColumnStart = String(placement.col + 1)
      cell.style.gridRowStart = String(placement.row + 1)
      cell.style.setProperty('--pixel-color', paletteColor())
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

  function settleToBase(mosaic) {
    var cells = mosaic.querySelectorAll('.pixel-chrome__cell')
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.remove('is-settling')
      cells[i].classList.add('is-ambient-base')
      cells[i].style.removeProperty('--pixel-color')
      cells[i].style.removeProperty('--pixel-delay')
    }
  }

  function pickPatchRegion(grid) {
    var sliceWidth =
      PATCH_SLICE_MIN + Math.random() * (PATCH_SLICE_MAX - PATCH_SLICE_MIN)
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
    var cells = mosaic.querySelectorAll('.pixel-chrome__cell')
    var picked = []

    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i]
      if (
        cell.__col >= region.startCol &&
        cell.__col < region.startCol + region.colSpan &&
        cell.__row >= region.startRow &&
        cell.__row < region.startRow + region.rowSpan
      ) {
        picked.push(cell)
      }
    }

    if (picked.length > MAX_PATCH_CELLS) {
      for (var j = picked.length - 1; j > 0; j--) {
        var k = (Math.random() * (j + 1)) | 0
        var tmp = picked[j]
        picked[j] = picked[k]
        picked[k] = tmp
      }
      picked = picked.slice(0, MAX_PATCH_CELLS)
    }

    return picked
  }

  function animatePatchCell(cell) {
    if (!cell.isConnected) {
      return
    }

    var duration =
      WAVE_DURATION_MIN +
      ((Math.random() * (WAVE_DURATION_MAX - WAVE_DURATION_MIN)) | 0)
    var delay = (Math.random() * WAVE_DELAY_MAX) | 0

    cell.classList.add('is-ambient-wave')
    cell.style.setProperty('--pixel-wave-color', waveColor())
    cell.style.setProperty('--pixel-wave-duration', duration + 'ms')
    cell.style.setProperty('--pixel-wave-delay', delay + 'ms')

    window.setTimeout(function () {
      if (!cell.isConnected) {
        return
      }
      cell.classList.remove('is-ambient-wave')
      cell.style.removeProperty('--pixel-wave-color')
      cell.style.removeProperty('--pixel-wave-duration')
      cell.style.removeProperty('--pixel-wave-delay')
    }, duration + delay + 40)
  }

  function runPatch(mosaic) {
    if (!mosaic || !mosaic.__pixelGrid || !mosaic.parentNode) {
      return
    }

    var cells = cellsInRegion(mosaic, pickPatchRegion(mosaic.__pixelGrid))
    if (!cells.length) {
      return
    }

    for (var i = 0; i < cells.length; i++) {
      animatePatchCell(cells[i])
    }
  }

  function runAmbientBurst() {
    if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
      return
    }

    if (document.hidden) {
      return
    }

    var live = []
    for (var i = 0; i < activeMosaics.length; i++) {
      if (activeMosaics[i].parentNode) {
        live.push(activeMosaics[i])
      }
    }
    activeMosaics = live

    if (!live.length) {
      return
    }

    var mosaic = live[(Math.random() * live.length) | 0]
    for (var p = 0; p < PATCHES_PER_BURST; p++) {
      ;(function (patchIndex) {
        window.setTimeout(function () {
          runPatch(mosaic)
        }, patchIndex * PATCH_STAGGER_MS)
      })(p)
    }
  }

  function clearAmbientTimers() {
    for (var t = 0; t < ambientTimers.length; t++) {
      window.clearTimeout(ambientTimers[t])
    }
    ambientTimers = []
  }

  function scheduleAmbientLoop(initialDelayMs) {
    if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
      return
    }

    function tick() {
      if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
        return
      }

      if (!document.hidden) {
        runAmbientBurst()
      }

      var nextPause =
        BURST_PAUSE_MIN + Math.random() * (BURST_PAUSE_MAX - BURST_PAUSE_MIN)
      ambientTimers.push(window.setTimeout(tick, nextPause))
    }

    ambientTimers.push(window.setTimeout(tick, initialDelayMs))
  }

  function enterAmbient(mosaics) {
    document.documentElement.classList.remove('pixel-chrome--active')
    document.documentElement.classList.add('pixel-chrome--done', 'pixel-chrome--ambient')
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))

    for (var i = 0; i < mosaics.length; i++) {
      settleToBase(mosaics[i])
    }

    activeMosaics = mosaics.slice()
    runAmbientBurst()
    scheduleAmbientLoop(500)
    scheduleAmbientLoop(500 + AMBIENT_LOOP_OFFSET_MS)
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
      !ambientTimers.length
    ) {
      runAmbientBurst()
      scheduleAmbientLoop(500)
      scheduleAmbientLoop(500 + AMBIENT_LOOP_OFFSET_MS)
    }
  })

  REDUCED.addEventListener('change', function () {
    if (REDUCED.matches) {
      ambientStopped = true
      clearAmbientTimers()
      finishImmediately()
    }
  })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()

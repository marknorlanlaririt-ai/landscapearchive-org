/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Desaturated 5px grid cells settle to --accent-strong (#343d4a), then three ambient
 * overlay layers run lighter-only patch waves with subtle scale pulse.
 * Dispatches foundation-pixel-chrome-readable (~4s) then
 * foundation-pixel-chrome-settled (~9.2s) for staggered text reveal.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var CELL_SIZE = 5
  var CHROME_BASE = '#343d4a'
  var CHROME_HUE = 215
  var CHROME_SAT = 0.1
  var CHROME_LIGHT = 0.247
  var LIGHTNESS_JITTER = 0.05
  var WAVE_LIGHTNESS_JITTER = 0.08
  var TIME_SCALE = 3.3

  function scaleMs(ms) {
    return Math.round(ms * TIME_SCALE)
  }

  var MAX_DELAY_MS = scaleMs(2000)
  var TRANSITION_MS = scaleMs(680)
  var READABLE_MS = scaleMs(1200)
  var SETTLE_MS = MAX_DELAY_MS + TRANSITION_MS + scaleMs(80)
  var MAX_CELLS_PER_LAYER = 1500
  var MAX_PATCH_CELLS = 90
  var PATCH_SLICE_MIN = 0.15
  var PATCH_SLICE_MAX = 0.25
  var PATCHES_PER_BURST = 3
  var PATCH_STAGGER_MS = scaleMs(180)
  var WAVE_DURATION_MIN = scaleMs(150)
  var WAVE_DURATION_MAX = scaleMs(600)
  var WAVE_DELAY_MAX = scaleMs(220)
  var BURST_PAUSE_MIN = scaleMs(700)
  var BURST_PAUSE_MAX = scaleMs(1600)
  var AMBIENT_LOOP_OFFSET_MS = scaleMs(900)
  var AMBIENT_BOOT_MS = scaleMs(500)
  var LAYER_STAGGER_MS = scaleMs(400)
  var SCALE_MIN = 0.6
  var SCALE_MAX = 1.2
  var LAYER_COUNT = 3
  var AMBIENT_LAYERS = [
    { opacity: 1, speedMult: 1, lightnessBoost: 0, cellBudget: 1500 },
    { opacity: 0.5, speedMult: 1.35, lightnessBoost: 0.03, cellBudget: 1200 },
    { opacity: 0.3, speedMult: 0.8, lightnessBoost: 0.055, cellBudget: 900 }
  ]

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
      CHROME_LIGHT + Math.random() * jitter,
      CHROME_LIGHT,
      CHROME_LIGHT + jitter
    )
    return hslToHex(CHROME_HUE, CHROME_SAT, l)
  }

  function waveColor(layerIndex) {
    var layer = AMBIENT_LAYERS[layerIndex] || AMBIENT_LAYERS[0]
    var lift = WAVE_LIGHTNESS_JITTER + layer.lightnessBoost
    var l = clamp(
      CHROME_LIGHT + 0.01 + Math.random() * lift,
      CHROME_LIGHT + 0.01,
      CHROME_LIGHT + lift + layer.lightnessBoost
    )
    return hslToHex(CHROME_HUE, CHROME_SAT, l)
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

  function gridForSize(width, height, cellBudget) {
    var cols = Math.max(1, Math.ceil(width / CELL_SIZE))
    var rows = Math.max(1, Math.ceil(height / CELL_SIZE))
    var total = cols * rows
    var stride = 1
    var budget = cellBudget || MAX_CELLS_PER_LAYER

    if (total > budget) {
      stride = Math.ceil(Math.sqrt(total / budget))
    }

    var placements = []
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        if (row % stride === 0 && col % stride === 0) {
          placements.push({ col: col, row: row })
        }
      }
    }

    if (placements.length > budget) {
      placements = placements.slice(0, budget)
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

  function createMosaic(host, layerIndex) {
    var layer = AMBIENT_LAYERS[layerIndex]
    var size = measureHost(host)
    var grid = gridForSize(size.width, size.height, layer.cellBudget)

    var mosaic = document.createElement('div')
    mosaic.className =
      'pixel-chrome__mosaic pixel-chrome__mosaic--layer-' + layerIndex
    mosaic.setAttribute('aria-hidden', 'true')
    mosaic.style.gridTemplateColumns =
      'repeat(' + grid.cols + ', ' + CELL_SIZE + 'px)'
    mosaic.style.gridTemplateRows =
      'repeat(' + grid.rows + ', ' + CELL_SIZE + 'px)'
    mosaic.style.zIndex = String(layerIndex)
    if (layerIndex > 0) {
      mosaic.style.opacity = String(layer.opacity)
    }
    mosaic.__pixelGrid = grid
    mosaic.__layerIndex = layerIndex

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

  function createHostMosaics(host) {
    var mosaics = []
    for (var layer = 0; layer < LAYER_COUNT; layer++) {
      mosaics.push(createMosaic(host, layer))
    }
    return mosaics
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

  function animatePatchCell(cell, layerIndex) {
    if (!cell.isConnected) {
      return
    }

    var layer = AMBIENT_LAYERS[layerIndex] || AMBIENT_LAYERS[0]
    var duration =
      WAVE_DURATION_MIN +
      ((Math.random() * (WAVE_DURATION_MAX - WAVE_DURATION_MIN)) | 0)
    duration = Math.round(duration / layer.speedMult)
    var delay = Math.round(((Math.random() * WAVE_DELAY_MAX) | 0) / layer.speedMult)
    var scale = SCALE_MIN + Math.random() * (SCALE_MAX - SCALE_MIN)

    cell.classList.add('is-ambient-wave')
    cell.style.setProperty('--pixel-wave-color', waveColor(layerIndex))
    cell.style.setProperty('--pixel-wave-duration', duration + 'ms')
    cell.style.setProperty('--pixel-wave-delay', delay + 'ms')
    cell.style.setProperty('--pixel-wave-scale', String(scale))

    window.setTimeout(
      function () {
        if (!cell.isConnected) {
          return
        }
        cell.classList.remove('is-ambient-wave')
        cell.style.removeProperty('--pixel-wave-color')
        cell.style.removeProperty('--pixel-wave-duration')
        cell.style.removeProperty('--pixel-wave-delay')
        cell.style.removeProperty('--pixel-wave-scale')
      },
      duration + delay + 60
    )
  }

  function runPatch(mosaic) {
    if (!mosaic || !mosaic.__pixelGrid || !mosaic.parentNode) {
      return
    }

    var cells = cellsInRegion(mosaic, pickPatchRegion(mosaic.__pixelGrid))
    if (!cells.length) {
      return
    }

    var layerIndex = mosaic.__layerIndex || 0
    for (var i = 0; i < cells.length; i++) {
      animatePatchCell(cells[i], layerIndex)
    }
  }

  function runAmbientBurst(layerIndex) {
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

    var layerMosaics = []
    for (var m = 0; m < live.length; m++) {
      if (live[m].__layerIndex === layerIndex) {
        layerMosaics.push(live[m])
      }
    }

    if (!layerMosaics.length) {
      return
    }

    var mosaic = layerMosaics[(Math.random() * layerMosaics.length) | 0]
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

  function scheduleAmbientLoop(initialDelayMs, layerIndex) {
    if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
      return
    }

    var layer = AMBIENT_LAYERS[layerIndex] || AMBIENT_LAYERS[0]

    function tick() {
      if (ambientStopped || REDUCED.matches || !activeMosaics.length) {
        return
      }

      if (!document.hidden) {
        runAmbientBurst(layerIndex)
      }

      var pauseSpan = BURST_PAUSE_MAX - BURST_PAUSE_MIN
      var nextPause =
        BURST_PAUSE_MIN + Math.random() * pauseSpan * layer.speedMult
      ambientTimers.push(window.setTimeout(tick, nextPause))
    }

    ambientTimers.push(window.setTimeout(tick, initialDelayMs))
  }

  function startAmbientLoops() {
    for (var layer = 0; layer < LAYER_COUNT; layer++) {
      var boot = AMBIENT_BOOT_MS + layer * LAYER_STAGGER_MS
      scheduleAmbientLoop(boot, layer)
      scheduleAmbientLoop(boot + AMBIENT_LOOP_OFFSET_MS, layer)
    }
  }

  function enterAmbient(mosaics) {
    document.documentElement.classList.remove('pixel-chrome--active')
    document.documentElement.classList.add('pixel-chrome--done', 'pixel-chrome--ambient')
    window.dispatchEvent(new CustomEvent('foundation-pixel-chrome-settled'))

    for (var i = 0; i < mosaics.length; i++) {
      settleToBase(mosaics[i])
    }

    activeMosaics = mosaics.slice()
    for (var layer = 0; layer < LAYER_COUNT; layer++) {
      runAmbientBurst(layer)
    }
    startAmbientLoops()
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
    document.documentElement.style.setProperty(
      '--pixel-settle-duration',
      TRANSITION_MS + 'ms'
    )

    var hosts = document.querySelectorAll(CHROME_TARGETS)
    var mosaics = []
    for (var i = 0; i < hosts.length; i++) {
      var hostMosaics = createHostMosaics(hosts[i])
      for (var h = 0; h < hostMosaics.length; h++) {
        mosaics.push(hostMosaics[h])
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
      for (var layer = 0; layer < LAYER_COUNT; layer++) {
        runAmbientBurst(layer)
      }
      startAmbientLoops()
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

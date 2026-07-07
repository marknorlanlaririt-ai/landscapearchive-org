/**
 * Experimental pixel-dissolve header/footer chrome (toggle: html[data-pixel-chrome="1"]).
 * Tiny adjacent grid cells (4px mobile / 5px desktop) in a narrow blue-purple band
 * around --accent-strong (#343d4a, HSL ~215°) with organic gradient clusters
 * (green pockets ~140–170°, intermittent warm accents ~25–45°) settle to chrome,
 * then three ambient overlay layers run lighter-only patch waves with subtle
 * grow-only scale pulse.
 * Dispatches foundation-pixel-chrome-readable (~1.8s) then
 * foundation-pixel-chrome-settled (~4.1s) for staggered text reveal.
 * Intro dissolve uses INTRO_TIME_SCALE; ambient pulse keeps AMBIENT_TIME_SCALE.
 */
(function () {
  var CHROME_TARGETS = '.site-header, .site-footer'
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var MOBILE = window.matchMedia('(max-width: 720px)')
  var CHROME_BASE = '#343d4a'
  var CHROME_HUE_MIN = 215
  var CHROME_HUE_MAX = 230
  var CHROME_SAT_MIN = 0.06
  var CHROME_SAT_MAX = 0.12
  var CHROME_LIGHT = 0.247
  var SETTLE_LIGHTNESS_JITTER = 0.025
  var MOBILE_SETTLE_LIGHTNESS_JITTER = 0.018
  var WAVE_LIGHTNESS_JITTER = 0.05
  var GREEN_HUE_MIN = 140
  var GREEN_HUE_MAX = 170
  var GREEN_SAT_BOOST_MAX = 0.05
  var GREEN_INFLUENCE_MAX = 0.58
  var GRADIENT_GREEN_CLUSTER_MIN = 2
  var GRADIENT_GREEN_CLUSTER_MAX = 4
  var WARM_HUE_MIN = 25
  var WARM_HUE_MAX = 45
  var WARM_SAT_MAX = 0.07
  var WARM_INFLUENCE_MAX = 0.32
  var GRADIENT_WARM_POCKET_MAX = 2
  var INTRO_TIME_SCALE = 1.5
  var AMBIENT_TIME_SCALE = 3.3

  function scaleIntroMs(ms) {
    return Math.round(ms * INTRO_TIME_SCALE)
  }

  function scaleAmbientMs(ms) {
    return Math.round(ms * AMBIENT_TIME_SCALE)
  }

  var MAX_DELAY_MS = scaleIntroMs(2000)
  var TRANSITION_MS = scaleIntroMs(680)
  var READABLE_MS = scaleIntroMs(1200)
  var CONTENT_FADE_MS = scaleIntroMs(480)
  var SETTLE_MS = MAX_DELAY_MS + TRANSITION_MS + scaleIntroMs(80)
  var MAX_CELLS_PER_LAYER = 1500
  var MAX_PATCH_CELLS = 90
  var PATCH_SLICE_MIN = 0.15
  var PATCH_SLICE_MAX = 0.25
  var PATCHES_PER_BURST = 3
  var PATCH_STAGGER_MS = scaleAmbientMs(180)
  var WAVE_DURATION_MIN = scaleAmbientMs(150)
  var WAVE_DURATION_MAX = scaleAmbientMs(600)
  var WAVE_DELAY_MAX = scaleAmbientMs(220)
  var BURST_PAUSE_MIN = scaleAmbientMs(700)
  var BURST_PAUSE_MAX = scaleAmbientMs(1600)
  var AMBIENT_LOOP_OFFSET_MS = scaleAmbientMs(900)
  var AMBIENT_BOOT_MS = scaleAmbientMs(500)
  var LAYER_STAGGER_MS = scaleAmbientMs(400)
  var SCALE_MIN = 1
  var SCALE_MAX = 1.12
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

  function cellSizePx() {
    return MOBILE.matches ? 4 : 5
  }

  function settleLightnessJitter() {
    return MOBILE.matches
      ? MOBILE_SETTLE_LIGHTNESS_JITTER
      : SETTLE_LIGHTNESS_JITTER
  }

  function createGradientField(cols, rows) {
    var clusters = []
    var greenCount =
      GRADIENT_GREEN_CLUSTER_MIN +
      ((Math.random() *
        (GRADIENT_GREEN_CLUSTER_MAX - GRADIENT_GREEN_CLUSTER_MIN + 1)) |
        0)
    for (var g = 0; g < greenCount; g++) {
      clusters.push({
        kind: 'green',
        col: Math.random() * cols,
        row: Math.random() * rows,
        radiusX: (0.1 + Math.random() * 0.2) * cols,
        radiusY: (0.08 + Math.random() * 0.16) * rows,
        strength: 0.38 + Math.random() * 0.32,
        hue: GREEN_HUE_MIN + Math.random() * (GREEN_HUE_MAX - GREEN_HUE_MIN),
        satBoost: 0.015 + Math.random() * GREEN_SAT_BOOST_MAX
      })
    }
    var warmCount = Math.random() < 0.72 ? 1 : 0
    if (Math.random() < 0.28) {
      warmCount = GRADIENT_WARM_POCKET_MAX
    }
    for (var w = 0; w < warmCount; w++) {
      clusters.push({
        kind: 'warm',
        col: Math.random() * cols,
        row: Math.random() * rows,
        radiusX: (0.04 + Math.random() * 0.09) * cols,
        radiusY: (0.035 + Math.random() * 0.07) * rows,
        strength: 0.14 + Math.random() * 0.18,
        hue: WARM_HUE_MIN + Math.random() * (WARM_HUE_MAX - WARM_HUE_MIN),
        satBoost: 0.008 + Math.random() * 0.022
      })
    }
    return clusters
  }

  function clusterInfluence(col, row, cluster) {
    var dx = (col - cluster.col) / Math.max(cluster.radiusX, 1)
    var dy = (row - cluster.row) / Math.max(cluster.radiusY, 1)
    var distSq = dx * dx + dy * dy
    if (distSq >= 1) {
      return 0
    }
    var t = 1 - distSq
    return t * t * cluster.strength
  }

  function lerpHue(from, to, weight) {
    if (weight <= 0) {
      return from
    }
    if (weight >= 1) {
      return to
    }
    var delta = ((to - from + 540) % 360) - 180
    return (from + delta * weight + 360) % 360
  }

  function sampleGradient(clusters, col, row) {
    var hue =
      CHROME_HUE_MIN + Math.random() * (CHROME_HUE_MAX - CHROME_HUE_MIN)
    var sat =
      CHROME_SAT_MIN + Math.random() * (CHROME_SAT_MAX - CHROME_SAT_MIN)
    var greenInf = 0
    var greenHue = hue
    var greenSatBoost = 0
    var warmInf = 0
    var warmHue = hue
    var warmSatBoost = 0

    for (var i = 0; i < clusters.length; i++) {
      var cluster = clusters[i]
      var inf = clusterInfluence(col, row, cluster)
      if (inf <= 0) {
        continue
      }
      if (cluster.kind === 'green' && inf > greenInf) {
        greenInf = inf
        greenHue = cluster.hue
        greenSatBoost = cluster.satBoost * inf
      } else if (cluster.kind === 'warm' && inf > warmInf) {
        warmInf = inf
        warmHue = cluster.hue
        warmSatBoost = Math.min(WARM_SAT_MAX, cluster.satBoost * inf)
      }
    }

    if (greenInf > 0) {
      hue = lerpHue(hue, greenHue, Math.min(GREEN_INFLUENCE_MAX, greenInf))
      sat = clamp(
        sat + greenSatBoost,
        CHROME_SAT_MIN,
        CHROME_SAT_MAX + GREEN_SAT_BOOST_MAX
      )
    }

    if (warmInf > 0) {
      hue = lerpHue(hue, warmHue, Math.min(WARM_INFLUENCE_MAX, warmInf))
      sat = clamp(sat + warmSatBoost, CHROME_SAT_MIN, WARM_SAT_MAX)
    }

    return { hue: hue, sat: sat }
  }

  function chromeColor(options) {
    var opts = options || {}
    var sample =
      opts.clusters && opts.col != null && opts.row != null
        ? sampleGradient(opts.clusters, opts.col, opts.row)
        : {
            hue:
              CHROME_HUE_MIN +
              Math.random() * (CHROME_HUE_MAX - CHROME_HUE_MIN),
            sat:
              CHROME_SAT_MIN +
              Math.random() * (CHROME_SAT_MAX - CHROME_SAT_MIN)
          }
    var jitter = opts.lightnessJitter || settleLightnessJitter()
    var base = opts.lightnessBase == null ? CHROME_LIGHT : opts.lightnessBase
    var l = clamp(base + Math.random() * jitter, base, base + jitter)
    return hslToHex(sample.hue, sample.sat, l)
  }

  function paletteColor(col, row, clusters) {
    return chromeColor({ col: col, row: row, clusters: clusters })
  }

  function waveColor(layerIndex, col, row, clusters) {
    var layer = AMBIENT_LAYERS[layerIndex] || AMBIENT_LAYERS[0]
    var lift = WAVE_LIGHTNESS_JITTER + layer.lightnessBoost
    return chromeColor({
      col: col,
      row: row,
      clusters: clusters,
      lightnessBase: CHROME_LIGHT + 0.008,
      lightnessJitter: lift + layer.lightnessBoost
    })
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
    var cellSize = cellSizePx()
    var cols = Math.max(1, Math.ceil(width / cellSize))
    var rows = Math.max(1, Math.ceil(height / cellSize))
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
      cellSize: cellSize,
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
    mosaic.style.setProperty('--pixel-cell-size', grid.cellSize + 'px')
    mosaic.style.gridTemplateColumns =
      'repeat(' + grid.cols + ', ' + grid.cellSize + 'px)'
    mosaic.style.gridTemplateRows =
      'repeat(' + grid.rows + ', ' + grid.cellSize + 'px)'
    mosaic.style.gap = '0'
    mosaic.style.rowGap = '0'
    mosaic.style.columnGap = '0'
    mosaic.style.zIndex = String(layerIndex)
    if (layerIndex > 0) {
      mosaic.style.opacity = String(layer.opacity)
    }
    mosaic.__pixelGrid = grid
    mosaic.__layerIndex = layerIndex
    mosaic.__gradientField = createGradientField(grid.cols, grid.rows)

    var fragment = document.createDocumentFragment()
    for (var i = 0; i < grid.placements.length; i++) {
      var placement = grid.placements[i]
      var cell = document.createElement('span')
      cell.className = 'pixel-chrome__cell'
      cell.__col = placement.col
      cell.__row = placement.row
      cell.style.gridColumnStart = String(placement.col + 1)
      cell.style.gridRowStart = String(placement.row + 1)
      if (grid.stride > 1) {
        cell.style.gridColumnEnd = 'span ' + grid.stride
        cell.style.gridRowEnd = 'span ' + grid.stride
      }
      cell.style.setProperty(
        '--pixel-color',
        paletteColor(placement.col, placement.row, mosaic.__gradientField)
      )
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

  function animatePatchCell(cell, layerIndex, clusters) {
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
    cell.style.setProperty(
      '--pixel-wave-color',
      waveColor(layerIndex, cell.__col, cell.__row, clusters)
    )
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
    var clusters = mosaic.__gradientField || []
    for (var i = 0; i < cells.length; i++) {
      animatePatchCell(cells[i], layerIndex, clusters)
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
    document.documentElement.style.setProperty(
      '--pixel-content-fade-duration',
      CONTENT_FADE_MS + 'ms'
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

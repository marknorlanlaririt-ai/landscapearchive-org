/**
 * Foundation + schema portal entrance animations.
 * - Header wordmark lines: line 1 slides down, line 2 slides up on load
 * - Header nav: staggered fade + slide on load
 * - Content sections: Intersection Observer fade/slide on scroll
 * Respects prefers-reduced-motion; transform + opacity only.
 */
(function () {
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var STAGGER_MS = 70
  var STAGGER_MAX = 420
  var HEADER_NAV_BASE_MS = 0
  var HEADER_NAV_STAGGER_MS = 40

  /** Block-level targets — one fade/slide per section or card. */
  var BLOCK_SELECTOR = [
    '#main .section-block',
    '#main .hero',
    '#main .pillar',
    '#main .note-card',
    '#main .essay__foot',
    '#main .fieldnotes__planned',
    '#main .reg__module',
    '#main .reg__group',
    '#main .reg__card',
    '#main .reg__note',
    '#main .sign-in__panel',
    '#main .foundation-section',
    '#main .foundation-card',
    '#main .foundation-callout',
    '#main .dict-controls',
    '#main .dict-count',
    '#main .schema-context-bar'
  ].join(', ')

  /** Intro / hero groups — stagger direct children. */
  var STAGGER_GROUPS = [
    '#main .hero__inner',
    '#main [class*="__intro"]',
    '#main .gov__toc',
    '.foundation-hero'
  ]

  var observer = null

  function staggerDelay(index) {
    return Math.min(index * STAGGER_MS, STAGGER_MAX) + 'ms'
  }

  function markVisible(el) {
    el.classList.add('is-visible')
  }

  function markHeaderVisible(el) {
    el.classList.add('is-header-visible')
  }

  function tagElement(el, delayIndex) {
    if (!el || el.hasAttribute('data-animate-in')) {
      return
    }
    el.setAttribute('data-animate-in', '')
    if (delayIndex > 0) {
      el.style.setProperty('--animate-delay', staggerDelay(delayIndex))
    }
    if (REDUCED.matches) {
      markVisible(el)
      return
    }
    if (observer) {
      observer.observe(el)
    }
  }

  function collectBlockTargets() {
    var nodes = document.querySelectorAll(BLOCK_SELECTOR)
    var list = []
    for (var i = 0; i < nodes.length; i++) {
      list.push({ el: nodes[i], delay: 0 })
    }
    return list
  }

  function collectStaggerTargets() {
    var list = []
    for (var g = 0; g < STAGGER_GROUPS.length; g++) {
      var roots = document.querySelectorAll(STAGGER_GROUPS[g])
      for (var r = 0; r < roots.length; r++) {
        var children = roots[r].children
        for (var c = 0; c < children.length; c++) {
          list.push({ el: children[c], delay: c })
        }
      }
    }
    return list
  }

  function bindObserver() {
    observer = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i]
          if (entry.isIntersecting) {
            markVisible(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { root: null, rootMargin: '0px 0px -4% 0px', threshold: 0.08 }
    )
  }

  function revealInViewport() {
    if (REDUCED.matches) {
      return
    }
    var pending = document.querySelectorAll('[data-animate-in]:not(.is-visible)')
    for (var i = 0; i < pending.length; i++) {
      var el = pending[i]
      var rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        markVisible(el)
        if (observer) {
          observer.unobserve(el)
        }
      }
    }
  }

  function initWordmarkLines() {
    var words = document.querySelectorAll('.site-header__wordmark .site-header__word')
    for (var i = 0; i < words.length; i++) {
      words[i].style.setProperty('--word-index', String(i))
    }
  }

  function initNavStagger() {
    var links = document.querySelectorAll(
      '.site-header__nav [data-animate-stagger], .site-header__archive-link[data-animate-stagger]'
    )
    for (var i = 0; i < links.length; i++) {
      links[i].style.setProperty('--header-stagger-index', String(i))
      links[i].style.setProperty(
        '--header-stagger-delay',
        String(HEADER_NAV_BASE_MS + i * HEADER_NAV_STAGGER_MS) + 'ms'
      )
    }
  }

  function playHeaderAnimations() {
    document.documentElement.classList.add('js-header-animate-ready')

    var wordLines = document.querySelectorAll('.site-header__wordmark .site-header__word')
    for (var i = 0; i < wordLines.length; i++) {
      markHeaderVisible(wordLines[i])
    }
    var navItems = document.querySelectorAll('.site-header [data-animate-stagger]')
    for (var j = 0; j < navItems.length; j++) {
      markHeaderVisible(navItems[j])
    }
  }

  function tagDynamicTerms(root) {
    if (!root) {
      return
    }
    var terms = root.querySelectorAll('.dict-term:not([data-animate-in])')
    for (var i = 0; i < terms.length; i++) {
      tagElement(terms[i], i % 6)
    }
  }

  function initContentAnimations() {
    if (REDUCED.matches) {
      document.documentElement.classList.add('js-animate-ready')
    } else {
      bindObserver()
      document.documentElement.classList.add('js-animate-ready')
    }

    var targets = collectBlockTargets().concat(collectStaggerTargets())
    for (var i = 0; i < targets.length; i++) {
      tagElement(targets[i].el, targets[i].delay)
    }

    revealInViewport()

    var dictList = document.getElementById('dict-list')
    if (dictList) {
      tagDynamicTerms(dictList)
      if (!REDUCED.matches && typeof MutationObserver !== 'undefined') {
        var pending = false
        var mo = new MutationObserver(function () {
          if (pending) {
            return
          }
          pending = true
          requestAnimationFrame(function () {
            tagDynamicTerms(dictList)
            revealInViewport()
            pending = false
          })
        })
        mo.observe(dictList, { childList: true, subtree: true })
      }
    }
  }

  function init() {
    initWordmarkLines()
    initNavStagger()
    playHeaderAnimations()
    initContentAnimations()

    REDUCED.addEventListener('change', function () {
      if (REDUCED.matches) {
        var all = document.querySelectorAll('[data-animate-in]:not(.is-visible)')
        for (var j = 0; j < all.length; j++) {
          markVisible(all[j])
        }
        var words = document.querySelectorAll(
          '.site-header__wordmark .site-header__word:not(.is-header-visible)'
        )
        for (var k = 0; k < words.length; k++) {
          markHeaderVisible(words[k])
        }
        var navItems = document.querySelectorAll('[data-animate-stagger]:not(.is-header-visible)')
        for (var n = 0; n < navItems.length; n++) {
          markHeaderVisible(navItems[n])
        }
      }
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()


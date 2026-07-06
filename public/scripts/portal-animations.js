/**
 * Subtle scroll-triggered entrance animations for Foundation + schema portal pages.
 * Tags main content blocks with [data-animate-in]; IO adds .is-visible on enter.
 * Respects prefers-reduced-motion; no dependencies.
 */
(function () {
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
  var STAGGER_MS = 60
  var STAGGER_MAX = 360

  /** Block-level targets — one fade/slide per section or card. */
  var BLOCK_SELECTOR = [
    '#main .section-block',
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
    '#main .dict-count'
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
      { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )
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

  function init() {
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
            pending = false
          })
        })
        mo.observe(dictList, { childList: true, subtree: true })
      }
    }

    REDUCED.addEventListener('change', function () {
      if (REDUCED.matches) {
        var all = document.querySelectorAll('[data-animate-in]:not(.is-visible)')
        for (var j = 0; j < all.length; j++) {
          markVisible(all[j])
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

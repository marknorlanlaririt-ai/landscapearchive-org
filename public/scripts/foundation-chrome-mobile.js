/**
 * Mobile-only Foundation chrome: hide header nav on scroll down, keep brand row
 * and Sign in visible; reveal nav on scroll up; collapse draft banner with tap.
 */
(function () {
  var MOBILE_QUERY = '(max-width: 720px)'
  var SCROLL_DELTA = 10
  var media = window.matchMedia(MOBILE_QUERY)

  var header = document.querySelector('.site-header')
  var banner = document.querySelector('[data-draft-banner]')
  var lastScrollY = window.scrollY
  var headerCollapsed = false
  var scrollTicking = false

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  function updateStickyOffset() {
    var total = 0
    if (header) {
      total += header.getBoundingClientRect().height
    }
    if (banner && banner.offsetParent !== null) {
      total += banner.getBoundingClientRect().height
    }
    document.documentElement.style.setProperty(
      '--foundation-sticky-chrome-height',
      Math.ceil(total) + 'px'
    )
  }

  function setHeaderCollapsed(next) {
    if (!header || headerCollapsed === next) {
      return
    }
    headerCollapsed = next
    header.classList.toggle('site-header--chrome-collapsed', next)
    updateStickyOffset()
  }

  function onScroll() {
    if (!header || !media.matches || prefersReducedMotion()) {
      if (headerCollapsed) {
        setHeaderCollapsed(false)
      }
      return
    }

    var y = window.scrollY
    if (y <= 0) {
      setHeaderCollapsed(false)
    } else if (y - lastScrollY > SCROLL_DELTA) {
      setHeaderCollapsed(true)
    } else if (lastScrollY - y > SCROLL_DELTA) {
      setHeaderCollapsed(false)
    }
    lastScrollY = y
  }

  function onScrollEvent() {
    if (scrollTicking) {
      return
    }
    scrollTicking = true
    window.requestAnimationFrame(function () {
      onScroll()
      scrollTicking = false
    })
  }

  function bindBanner() {
    if (!banner) {
      return
    }

    var toggle = banner.querySelector('[data-draft-banner-toggle]')
    if (!toggle) {
      return
    }

    function setExpanded(expanded) {
      banner.classList.toggle('draft-banner--expanded', expanded)
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false')
      toggle.textContent = expanded ? 'Show less' : 'Read more'
      updateStickyOffset()
    }

    toggle.addEventListener('click', function () {
      setExpanded(!banner.classList.contains('draft-banner--expanded'))
    })

    banner.addEventListener('click', function (event) {
      if (!media.matches || banner.classList.contains('draft-banner--expanded')) {
        return
      }
      if (event.target.closest('a, button')) {
        return
      }
      setExpanded(true)
    })
  }

  function resetForViewport() {
    if (!media.matches) {
      setHeaderCollapsed(false)
    }
    updateStickyOffset()
  }

  window.addEventListener('scroll', onScrollEvent, { passive: true })
  window.addEventListener('resize', updateStickyOffset, { passive: true })
  media.addEventListener('change', resetForViewport)

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateStickyOffset).catch(updateStickyOffset)
  } else {
    window.addEventListener('load', updateStickyOffset)
  }

  bindBanner()
  updateStickyOffset()
  onScroll()
})()

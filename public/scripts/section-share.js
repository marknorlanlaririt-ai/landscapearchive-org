/**
 * Share menu, copy-link, Web Share API, and Instagram cards for .section-share rows.
 * Loaded once from BaseLayout — Astro does not reliably hoist component
 * scripts when SectionShareLinks is rendered many times per page.
 */
(function () {
  function initShareMenu(root, menu) {
    var trigger = menu.querySelector('[data-share-menu-trigger]')
    var panel = menu.querySelector('.section-share__panel')
    if (!trigger || !panel) return

    function isOpen() {
      return trigger.getAttribute('aria-expanded') === 'true'
    }

    function positionPanel() {
      panel.classList.remove('section-share__panel--drop-up', 'section-share__panel--drop-down')
      var wasHidden = panel.hidden
      panel.hidden = false
      panel.style.visibility = 'hidden'
      panel.style.pointerEvents = 'none'

      var panelHeight = panel.offsetHeight
      var triggerRect = trigger.getBoundingClientRect()
      var spaceBelow = window.innerHeight - triggerRect.bottom
      var spaceAbove = triggerRect.top

      panel.style.visibility = ''
      panel.style.pointerEvents = ''
      if (wasHidden) panel.hidden = true

      if (panelHeight > spaceBelow && spaceAbove > spaceBelow) {
        panel.classList.add('section-share__panel--drop-up')
      } else {
        panel.classList.add('section-share__panel--drop-down')
      }
    }

    function openMenu() {
      positionPanel()
      panel.hidden = false
      trigger.setAttribute('aria-expanded', 'true')
      menu.classList.add('section-share__menu--open')
    }

    function closeMenu() {
      panel.hidden = true
      trigger.setAttribute('aria-expanded', 'false')
      menu.classList.remove('section-share__menu--open')
    }

    function toggleMenu() {
      if (isOpen()) closeMenu()
      else openMenu()
    }

    trigger.addEventListener('click', function (event) {
      event.stopPropagation()
      toggleMenu()
    })

    document.addEventListener('click', function (event) {
      if (!isOpen()) return
      if (!menu.contains(event.target)) closeMenu()
    })

    document.addEventListener('keydown', function (event) {
      if (!isOpen()) return
      if (event.key === 'Escape') {
        closeMenu()
        trigger.focus()
      }
    })

    window.addEventListener('resize', function () {
      if (isOpen()) positionPanel()
    })

    panel.querySelectorAll('[role="menuitem"]').forEach(function (item) {
      item.addEventListener('click', function () {
        window.setTimeout(closeMenu, 0)
      })
    })

    trigger.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' && !isOpen()) {
        event.preventDefault()
        openMenu()
        var first = panel.querySelector('[role="menuitem"]:not([hidden])')
        if (first) first.focus()
      }
    })

    panel.addEventListener('keydown', function (event) {
      var items = Array.prototype.slice.call(panel.querySelectorAll('[role="menuitem"]:not([hidden])'))
      var index = items.indexOf(document.activeElement)
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        var next = items[index + 1] || items[0]
        next.focus()
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        var prev = items[index - 1] || items[items.length - 1]
        prev.focus()
      } else if (event.key === 'Tab') {
        closeMenu()
      }
    })

    root._closeShareMenu = closeMenu
    closeMenu()
  }

  function initSectionShare(root) {
    if (!(root instanceof HTMLElement)) return
    if (root.dataset.shareInitialized === 'true') return

    var shareUrl = root.dataset.shareUrl
    var shareTitle = root.dataset.shareTitle
    if (!shareUrl) return

    root.dataset.shareInitialized = 'true'

    var menu = root.querySelector('[data-share-menu]')
    if (menu) initShareMenu(root, menu)

    var copyBtn = root.querySelector('[data-share-copy]')
    var copyLabel = root.querySelector('[data-share-copy-label]')
    var nativeBtn = root.querySelector('[data-share-native]')
    var status = root.querySelector('.section-share__status')

    function showCopied() {
      if (copyLabel) copyLabel.textContent = 'Copied'
      if (copyBtn) copyBtn.classList.add('section-share__item--done')
      if (status) status.textContent = 'Link copied to clipboard'
      window.setTimeout(function () {
        if (copyLabel) copyLabel.textContent = 'Copy link'
        if (copyBtn) copyBtn.classList.remove('section-share__item--done')
        if (status) status.textContent = ''
      }, 2200)
    }

    function copyLink() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(showCopied).catch(fallbackCopy)
        return
      }
      fallbackCopy()
    }

    function fallbackCopy() {
      var input = document.createElement('input')
      input.value = shareUrl
      input.setAttribute('readonly', '')
      input.style.position = 'absolute'
      input.style.left = '-9999px'
      document.body.appendChild(input)
      input.select()
      input.setSelectionRange(0, shareUrl.length)
      try {
        document.execCommand('copy')
        showCopied()
      } catch (err) {
        if (status) status.textContent = 'Copy failed — use the address bar link'
      }
      input.remove()
    }

    if (nativeBtn && typeof navigator.share === 'function') {
      nativeBtn.hidden = false
      nativeBtn.addEventListener('click', function () {
        navigator.share({ title: shareTitle || document.title, url: shareUrl }).catch(function (err) {
          if (err && err.name !== 'AbortError') copyLink()
        })
      })
    }

    if (copyBtn) copyBtn.addEventListener('click', copyLink)

    var captionBtn = root.querySelector('[data-share-caption]')
    var captionLabel = root.querySelector('[data-share-caption-label]')
    var ig = window.TlaSectionShareInstagram

    function showStatus(message) {
      if (status) status.textContent = message
      window.setTimeout(function () {
        if (status) status.textContent = ''
      }, 2600)
    }

    function showCaptionCopied() {
      if (captionLabel) captionLabel.textContent = 'Copied'
      if (captionBtn) captionBtn.classList.add('section-share__item--done')
      showStatus('Caption copied — paste in Instagram')
      window.setTimeout(function () {
        if (captionLabel) captionLabel.textContent = 'Copy caption'
        if (captionBtn) captionBtn.classList.remove('section-share__item--done')
      }, 2200)
    }

    if (captionBtn && ig && ig.copyCaption) {
      captionBtn.addEventListener('click', function () {
        ig.copyCaption(shareTitle || document.title, shareUrl)
          .then(showCaptionCopied)
          .catch(function () {
            showStatus('Copy failed — select caption manually')
          })
      })
    }

    root.querySelectorAll('[data-share-ig]').forEach(function (btn) {
      if (!ig || !ig.downloadCard) return
      btn.addEventListener('click', function () {
        var format = btn.getAttribute('data-share-ig')
        btn.disabled = true
        ig.downloadCard(format, shareUrl, shareTitle || document.title)
          .then(function () {
            showStatus(format === 'story' ? 'Story card downloaded' : 'Post card downloaded')
          })
          .catch(function () {
            showStatus('Could not create image — try again')
          })
          .finally(function () {
            btn.disabled = false
          })
      })
    })
  }

  function initAllSectionShare() {
    document.querySelectorAll('.section-share').forEach(initSectionShare)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSectionShare)
  } else {
    initAllSectionShare()
  }
})()

/**
 * Standard share menu: Web Share API, copy link, open, LinkedIn, X, email.
 * Instagram story packs are admin-only (Ad Studio) — not on public Share.
 * Loaded once from BaseLayout.
 */
(function () {
  var MOBILE_SHEET_MQ = window.matchMedia('(max-width: 720px)')
  var DISMISS_GUARD_MS = 450
  var activeShareMenu = null
  var globalDismissBound = false

  function isMobileSheet() {
    return MOBILE_SHEET_MQ.matches
  }

  function isInsideActiveShareMenu(target) {
    if (!activeShareMenu || !target) return false
    return (
      activeShareMenu.trigger.contains(target) ||
      activeShareMenu.menu.contains(target) ||
      activeShareMenu.panel.contains(target) ||
      (activeShareMenu.backdrop && activeShareMenu.backdrop.contains(target)) ||
      (activeShareMenu.overlayRoot && activeShareMenu.overlayRoot.contains(target))
    )
  }

  function getShareOverlayRoot() {
    var root = document.querySelector('.section-share__overlay-root')
    if (!root) {
      root = document.createElement('div')
      root.className = 'section-share__overlay-root'
      root.hidden = true
      document.body.appendChild(root)
    }
    return root
  }

  function migrateLegacyShareOverlayNodes(overlayRoot) {
    var legacyBackdrop = document.body.querySelector(':scope > .section-share__backdrop')
    if (legacyBackdrop) {
      overlayRoot.insertBefore(legacyBackdrop, overlayRoot.firstChild)
      legacyBackdrop.hidden = true
    }
    var legacyPanel = document.body.querySelector(':scope > .section-share__panel--floating')
    if (legacyPanel && legacyPanel.parentNode === document.body) {
      overlayRoot.appendChild(legacyPanel)
    }
  }

  function setShareOverlayOpen(open) {
    document.body.classList.toggle('section-share-open', open && isMobileSheet())
  }

  function bindGlobalDismiss() {
    if (globalDismissBound) return
    globalDismissBound = true

    document.addEventListener(
      'pointerdown',
      function (event) {
        if (!isMobileSheet()) return
        if (!activeShareMenu) return
        if (Date.now() < activeShareMenu.suppressDismissUntil) return
        if (isInsideActiveShareMenu(event.target)) return
        activeShareMenu.closeMenu()
      },
      true
    )

    document.addEventListener('click', function (event) {
      if (isMobileSheet()) return
      if (!activeShareMenu) return
      if (isInsideActiveShareMenu(event.target)) return
      activeShareMenu.closeMenu()
    })
  }

  function getShareBackdrop() {
    var overlayRoot = getShareOverlayRoot()
    migrateLegacyShareOverlayNodes(overlayRoot)
    var backdrop = overlayRoot.querySelector('.section-share__backdrop')
    if (!backdrop) {
      backdrop = document.createElement('button')
      backdrop.type = 'button'
      backdrop.className = 'section-share__backdrop'
      backdrop.setAttribute('aria-label', 'Close share menu')
      backdrop.hidden = true
      overlayRoot.insertBefore(backdrop, overlayRoot.firstChild)
    }
    return backdrop
  }

  function initShareMenu(root, menu) {
    var trigger = menu.querySelector('[data-share-menu-trigger]')
    var panel = menu.querySelector('.section-share__panel')
    if (!trigger || !panel) return

    var panelAnchor = { parent: menu, next: panel.nextSibling }
    var backdrop = null
    var backdropHandler = null
    var backdropShowFrame = 0
    var suppressDismissUntil = 0

    function isOpen() {
      return trigger.getAttribute('aria-expanded') === 'true'
    }

    function armDismissGuard() {
      if (!isMobileSheet()) return
      suppressDismissUntil = Date.now() + DISMISS_GUARD_MS
      if (activeShareMenu && activeShareMenu.closeMenu === closeMenu) {
        activeShareMenu.suppressDismissUntil = suppressDismissUntil
      }
    }

    function cancelBackdropReveal() {
      if (backdropShowFrame) {
        window.cancelAnimationFrame(backdropShowFrame)
        backdropShowFrame = 0
      }
    }

    function positionPanel() {
      if (!isOpen() || isMobileSheet()) return

      panel.classList.remove('section-share__panel--drop-up', 'section-share__panel--drop-down', 'section-share__panel--sheet')
      panel.style.top = ''
      panel.style.left = ''
      panel.style.maxHeight = ''
      panel.style.overflowY = ''

      var panelWidth = panel.offsetWidth
      var panelHeight = panel.offsetHeight
      var triggerRect = trigger.getBoundingClientRect()
      var gap = 6
      var spaceBelow = window.innerHeight - triggerRect.bottom - gap
      var spaceAbove = triggerRect.top - gap
      var dropUp = panelHeight > spaceBelow && spaceAbove >= spaceBelow

      var left = triggerRect.left
      left = Math.max(8, Math.min(left, window.innerWidth - panelWidth - 8))

      if (dropUp) {
        panel.classList.add('section-share__panel--drop-up')
        panel.style.top = Math.max(8, triggerRect.top - panelHeight - gap) + 'px'
      } else {
        panel.classList.add('section-share__panel--drop-down')
        var top = triggerRect.bottom + gap
        if (top + panelHeight > window.innerHeight - 8) {
          panel.style.maxHeight = Math.max(120, window.innerHeight - top - 8) + 'px'
          panel.style.overflowY = 'auto'
        }
        panel.style.top = top + 'px'
      }

      panel.style.left = left + 'px'
    }

    function detachBackdropHandler() {
      if (!backdrop || !backdropHandler) return
      backdrop.removeEventListener('pointerdown', backdropHandler)
      backdrop.removeEventListener('click', backdropHandler)
      backdropHandler = null
    }

    function revealBackdrop() {
      if (!isOpen()) return

      backdrop = getShareBackdrop()
      detachBackdropHandler()
      if (isMobileSheet()) {
        backdropHandler = function (event) {
          if (Date.now() < suppressDismissUntil) {
            event.preventDefault()
            event.stopPropagation()
            return
          }
          closeMenu()
        }
        backdrop.addEventListener('pointerdown', backdropHandler)
      } else {
        backdropHandler = closeMenu
        backdrop.addEventListener('click', backdropHandler)
      }
      backdrop.hidden = false
      if (activeShareMenu && activeShareMenu.closeMenu === closeMenu) {
        activeShareMenu.backdrop = backdrop
      }
    }

    function scheduleBackdropReveal() {
      cancelBackdropReveal()
      backdropShowFrame = window.requestAnimationFrame(function () {
        backdropShowFrame = window.requestAnimationFrame(revealBackdrop)
      })
    }

    function hideBackdrop() {
      cancelBackdropReveal()
      if (backdrop) {
        backdrop.hidden = true
        detachBackdropHandler()
      }
      if (activeShareMenu && activeShareMenu.closeMenu === closeMenu) {
        activeShareMenu.backdrop = null
      }
    }

    function mountFloating() {
      var overlayRoot = getShareOverlayRoot()
      migrateLegacyShareOverlayNodes(overlayRoot)
      overlayRoot.hidden = false
      getShareBackdrop()
      if (panel.parentNode !== overlayRoot) {
        overlayRoot.appendChild(panel)
      }
      panel.classList.add('section-share__panel--floating')
      if (isMobileSheet()) panel.classList.add('section-share__panel--sheet')
      setShareOverlayOpen(true)
      scheduleBackdropReveal()
    }

    function unmountFloating() {
      cancelBackdropReveal()
      hideBackdrop()
      panel.classList.remove('section-share__panel--floating', 'section-share__panel--sheet')
      panel.style.top = ''
      panel.style.left = ''
      panel.style.maxHeight = ''
      panel.style.overflowY = ''
      if (panelAnchor.parent && panel.parentNode !== panelAnchor.parent) {
        panelAnchor.parent.insertBefore(panel, panelAnchor.next)
      }
      getShareOverlayRoot().hidden = true
      setShareOverlayOpen(false)
    }

    function openMenu() {
      trigger.setAttribute('aria-expanded', 'true')
      menu.classList.add('section-share__menu--open')

      if (activeShareMenu && activeShareMenu.closeMenu !== closeMenu) {
        activeShareMenu.closeMenu()
      }

      bindGlobalDismiss()
      armDismissGuard()
      mountFloating()
      panel.hidden = false

      if (isMobileSheet()) {
        panel.classList.remove('section-share__panel--drop-up', 'section-share__panel--drop-down')
        panel.style.top = ''
        panel.style.left = ''
        panel.style.maxHeight = ''
        panel.style.overflowY = ''
      } else {
        panel.classList.remove('section-share__panel--sheet')
        positionPanel()
      }

      activeShareMenu = {
        menu: menu,
        panel: panel,
        trigger: trigger,
        backdrop: backdrop,
        overlayRoot: getShareOverlayRoot(),
        closeMenu: closeMenu,
        suppressDismissUntil: suppressDismissUntil
      }
    }

    function closeMenu() {
      panel.hidden = true
      trigger.setAttribute('aria-expanded', 'false')
      menu.classList.remove('section-share__menu--open')
      unmountFloating()
      if (activeShareMenu && activeShareMenu.closeMenu === closeMenu) {
        activeShareMenu = null
      }
    }

    function toggleMenu() {
      if (isOpen()) closeMenu()
      else openMenu()
    }

    trigger.addEventListener('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      toggleMenu()
      if (isOpen() && isMobileSheet()) armDismissGuard()
    })

    document.addEventListener('keydown', function (event) {
      if (!isOpen()) return
      if (event.key === 'Escape') {
        closeMenu()
        trigger.focus()
      }
    })

    window.addEventListener('resize', function () {
      if (!isOpen()) return
      if (isMobileSheet()) {
        panel.classList.add('section-share__panel--sheet')
        panel.classList.remove('section-share__panel--drop-up', 'section-share__panel--drop-down')
        panel.style.top = ''
        panel.style.left = ''
        panel.style.maxHeight = ''
        panel.style.overflowY = ''
        setShareOverlayOpen(true)
      } else {
        panel.classList.remove('section-share__panel--sheet')
        setShareOverlayOpen(false)
        positionPanel()
      }
    })

    window.addEventListener(
      'scroll',
      function () {
        if (isOpen() && !isMobileSheet()) positionPanel()
      },
      true
    )

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

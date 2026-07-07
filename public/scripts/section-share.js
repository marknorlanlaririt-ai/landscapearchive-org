/**
 * Copy-link, Web Share API, and feedback for .section-share rows.
 * Loaded once from BaseLayout — Astro does not reliably hoist component
 * scripts when SectionShareLinks is rendered many times per page.
 */
(function () {
  function initSectionShare(root) {
    if (!(root instanceof HTMLElement)) return
    if (root.dataset.shareInitialized === 'true') return

    var shareUrl = root.dataset.shareUrl
    var shareTitle = root.dataset.shareTitle
    if (!shareUrl) return

    root.dataset.shareInitialized = 'true'

    var copyBtn = root.querySelector('[data-share-copy]')
    var copyLabel = root.querySelector('[data-share-copy-label]')
    var nativeBtn = root.querySelector('[data-share-native]')
    var status = root.querySelector('.section-share__status')

    function showCopied() {
      if (copyLabel) copyLabel.textContent = 'Copied'
      if (copyBtn) copyBtn.classList.add('section-share__btn--done')
      if (status) status.textContent = 'Link copied to clipboard'
      window.setTimeout(function () {
        if (copyLabel) copyLabel.textContent = 'Copy link'
        if (copyBtn) copyBtn.classList.remove('section-share__btn--done')
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

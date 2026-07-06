(function () {
  var STORAGE_KEY = 'la-cookie-banner-dismissed'
  var COOKIE_NAME = 'la-cookie-banner-dismissed'

  function resolveCookieDomain() {
    var host = String(window.location.hostname || '').toLowerCase()
    if (host === 'landscapearchive.org' || host.slice(-20) === '.landscapearchive.org') {
      return '.landscapearchive.org'
    }
    return null
  }

  function readDismissed() {
    try {
      var cookieHit = document.cookie.split(';').some(function (entry) {
        return entry.trim().indexOf(COOKIE_NAME + '=true') === 0
      })
      if (cookieHit || window.localStorage.getItem(STORAGE_KEY) === 'true') {
        return true
      }
    } catch (error) {}
    return false
  }

  function writeDismissed() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch (error) {}

    var secure = window.location.protocol === 'https:' ? '; Secure' : ''
    var domain = resolveCookieDomain()
    var domainAttr = domain ? '; domain=' + domain : ''
    document.cookie =
      COOKIE_NAME + '=true; path=/' + domainAttr + '; max-age=31536000; SameSite=Lax' + secure
  }

  function initCookieNotice() {
    var notice = document.querySelector('[data-cookie-notice]')
    if (!notice) {
      return
    }

    if (readDismissed()) {
      notice.hidden = true
      notice.classList.remove('is-open')
      return
    }

    notice.hidden = false
    notice.classList.add('is-open')

    notice.addEventListener('click', function (event) {
      var target = event.target
      if (!(target instanceof Element)) {
        return
      }

      if (!target.closest('[data-cookie-dismiss]')) {
        return
      }

      event.preventDefault()
      writeDismissed()
      notice.classList.remove('is-open')
      notice.hidden = true
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieNotice)
  } else {
    initCookieNotice()
  }
})()

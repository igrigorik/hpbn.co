window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga("create", "UA-71196-18", "auto");
ga("set", "transport", "beacon");
ga("send", "pageview");

function showToast(text) {
  el = document.querySelector('#toast')
  el.innerText = text;
  el.style.display = 'block';

  var player = el.animate([
    {opacity: 0.5},
    {opacity: 1},
    {opacity: 1},
    {opacity: 1},
    {opacity: 1},
    {opacity: 0.5},
    {opacity: 0.0},
  ], {
    duration: 6000,
    iterations: 1,
    delay: 0
  });

  player.onfinish = function() {
    el.style.display = 'none';
  }
}

function stickyHeader(selector, cssClass) {
  var throttleTimeout = 300,
    element = document.querySelector(selector);

  if(!element) return true;

  var dHeight = 0,
    wHeight = 0,
    wScrollCurrent = 0,
    wScrollBefore = 0,
    wScrollDiff = 0,

    throttle = function(delay, fn) {
      var last, deferTimer;
      return function() {
        var context = this, args = arguments, now = +new Date;
        if (last && now < last + delay) {
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function(){
            last = now;
            fn.apply(context, args);
          }, delay);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    };

  window.addEventListener('scroll', throttle(throttleTimeout, function() {
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;
    wScrollBefore = wScrollCurrent;

    if (document.querySelector('.check:checked') != null)
      return;

    if (element.classList.contains('jump')) {
      element.classList.remove('jump');
      return;
    }

     // top of the page tolerance
    if(wScrollCurrent <= 30)
      element.classList.remove(cssClass);

    // scroll up
    else if(wScrollDiff > 15 && element.classList.contains(cssClass))
      element.classList.remove(cssClass);

    else if(wScrollDiff < 0) { // down
      if(wScrollCurrent + wHeight >= dHeight
         && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
      } else {
        element.classList.add(cssClass);
      }
    }

  }));
}

function ready() {
  var headerSelector = '#book-title',
      headerClass = 'header--hidden';

  stickyHeader(headerSelector, headerClass);

  var nav = document.getElementById('nav');
  if (nav) {
    var sections = [].slice.call(document.body.querySelectorAll('h2, h3'));
    sections.reverse().forEach(function (section, index) {
      var li = document.createElement('li');
      li.setAttribute('class', section.tagName.toLowerCase())

      var link = document.createElement('a');
      link.setAttribute('href', '#'+section.id);

      if (section.id == 'introduction')
        link.textContent = 'Introduction';
      else
        link.textContent = section.textContent.replace('§', '');

      li.onclick = function(el) {
        document.querySelector('.check:checked').checked = false;
        var menu = document.querySelector(headerSelector);
        if (el.currentTarget.textContent != 'Introduction') {
          menu.classList.add(headerClass);
          menu.classList.add('jump');
        }
      }

      li.appendChild(link);
      nav.insertBefore(li, nav.firstChild)
    });
  }

  if('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(onChange, { threshold: [0] });
    document.querySelectorAll('section').forEach(function(section) {
      observer.observe(section)
    });

    function onChange(changes) {
      changes.forEach(function(change) {
        var id = change.target.firstElementChild.id;
        var li = document.querySelector('#nav li a[href="#'+id+'"]');
        if (li == null)
          return;

        li.classList.toggle('active');
      });
    }
   }

  if (!navigator.onLine) { document.body.classList.add('offline') }
  window.addEventListener('online', function() {
    document.body.classList.remove('offline');
  })
  window.addEventListener('offline', function() {
    document.body.classList.add('offline');
  })
}

if (document.readyState == "complete"
     || document.readyState == "loaded"
     || document.readyState == "interactive") {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", function(event) {ready()});
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js", {
        scope: "/"
  }).then(function(registration) {
    registration.onupdatefound = function() {
      const installingWorker = registration.installing;
      installingWorker.onstatechange = function() {
        if (installingWorker.state === 'installed') {
          ga('send', 'event', 'serviceworker', 'installed');
          showToast('Content updated. Book is now available offline!')
        }
      }
    }
  }).catch(function(err) {
    ga('send', 'event', 'serviceworker', 'failed');
    if (window.console)
      console.error("Serviceworker install failed", err);
  });
}

window.addEventListener('beforeinstallprompt', function(event) {
  ga('send', 'event', 'install-prompt', 'fired');
  event.userChoice.then(function(res) {
    ga('send', 'event', 'install-prompt', res.outcome, res.platform);
  });
});

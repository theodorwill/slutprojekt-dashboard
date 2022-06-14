const cacheName = 'apiCache'

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache =>
        cache.addAll([
          '/',
          '/components/QuoteWidget.jsx',
          '/components/WeatherWidget.jsx',
        ])
      )
  )
  // eslint-disable-next-line no-restricted-globals
  self.skipWaiting()
  console.log("Installing")
})

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", event => {
  console.log("SW Activating")
})

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
  console.log("You are requesting ", event.request.url);
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res){ return res } 
      return fetch(event.request)
    })
  )
})


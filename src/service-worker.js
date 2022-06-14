const cacheName = 'apiCache'

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
  self.skipWaiting()
  console.log("Installing")
})

self.addEventListener("activate", event => {
  console.log("SW Activating")
})

self.addEventListener('fetch', event => {
  console.log("You are requesting ", event.request.url);
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res){ return res } 
      return fetch(event.request)
    })
  )
})


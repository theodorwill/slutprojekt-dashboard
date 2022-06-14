/* eslint-disable no-restricted-globals */

const manifest = self.__WB_MANIFEST
const staticCache = 'site-static-v2'
const dynamicCache = 'site-dynamic-v2'

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log(manifest)
      return cache.addAll(manifest.map((url) => url.url))
    })
  )
})

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache && key !== dynamicCache)
          .map((key) => caches.delete(key))
      )
    })
  )
})

self.addEventListener('fetch', (evt) => {
  if (!(evt.request.url.indexOf('http') === 0)) {
    return
  }

  if (navigator.onLine) {
    return
  }

  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then((fetchRes) => {
          return caches.open(dynamicCache).then((cache) => {
            cache.put(evt.request.url, fetchRes.clone())
            return fetchRes
          })
        })
        .catch((err) => {
          return caches.match(evt.request)
        })
      )
    })
  )
})

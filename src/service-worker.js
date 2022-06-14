/* eslint-disable no-restricted-globals */

const manifest = self.__WB_MANIFEST
const staticCache = 'site-static-v1'
const dynamicCache = 'site-dynamic-v1'

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log(manifest)
      return cache.addAll(manifest.map((url) => url.url))
    })
  )
})

self.addEventListener('activate', (evt) => {
  console.log('Service worker activated')
})

self.addEventListener('fetch', (evt) => {
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
      )
    })
  )
})

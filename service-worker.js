const CACHE_NAME = 'hamidou-cache-v1';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './src/app.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(networkResponse => {
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
      return networkResponse;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
  );
});

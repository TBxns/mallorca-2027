const CACHE_NAME = 'mallorca-2027-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './design/Mallorca-2027-app-standalone.html',
  './design/assets/photos/cala-aerial.png',
  './design/assets/photos/cala-pines-web.png',
  './design/assets/photos/crop-citroen.png',
  './design/assets/photos/crop-haven.png',
  './design/assets/photos/crop-steegje.png',
  './design/assets/photos/crop-zonsondergang.png',
  './design/assets/photos/mallorca-collage.png',
  './design/assets/photos/palma-dusk.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});

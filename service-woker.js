const cacheName = 'budget-tracker-v1';
const assets = [
  './',
  './index.html',
];

// Files ko save karna
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Offline hone par cache se file dikhana
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
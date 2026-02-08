const cacheName = 'elite-budget-v1';
const assets = ['./', './index.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(cacheName).then(c => c.addAll(assets))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));

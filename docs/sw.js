/* Service worker: praca offline (aplikacja, czcionki, zdjęcia) */
var VERSION = '95dc62a0a1';
var CORE = 'lacina-core-' + VERSION;
var IMG = 'lacina-img-v1';
var FONTS = 'lacina-fonts-v1';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CORE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('lacina-core-') === 0 && k !== CORE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  // zdjęcia z Wikimedia: najpierw pamięć podręczna
  if (url.hostname === 'upload.wikimedia.org') {
    e.respondWith(caches.open(IMG).then(function (c) {
      return c.match(req.url).then(function (hit) {
        return hit || fetch(req).then(function (r) { c.put(req.url, r.clone()); return r; });
      });
    }));
    return;
  }
  // czcionki Google: pamięć + odświeżanie w tle
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (r) { c.put(req, r.clone()); return r; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
    return;
  }
  // sama aplikacja: sieć, a bez sieci pamięć
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(function (r) {
      var copy = r.clone(); caches.open(CORE).then(function (c) { c.put(req, copy); }); return r;
    }).catch(function () {
      return caches.match(req).then(function (hit) { return hit || caches.match('./index.html'); });
    }));
  }
});

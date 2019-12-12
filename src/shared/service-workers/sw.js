// workbox.strategies.staleWhileRevalidate()

self.addEventListener('install', event => {
  // do something on install
  console.log('install service worker');
});

self.addEventListener('activate', event => {
  // do something on activate
  console.log('activated service worker');
});

// // cache external CDN resources
// workbox.routing.registerRoute(
//   new RegExp('https.*min\.(css|js)'),
//   workbox.strategies.staleWhileRevalidate()
// );
//
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'js-cache',
  })
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

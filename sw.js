self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-pwa-cache')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/scripts.js',
          '/icon-transition.css',
          '/exams.html',
          '/assignments.html',
          '/researches.html',
          '/projects.html',
          '/icon.svg'
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
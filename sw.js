self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-pwa-cache')
      .then(cache => {
        return cache.addAll([
          '/',
          'index.html',
          'styles.css',
          'scripts.js',
          'icon.svg',
          'assignments.html',
          'exams.html',
          'projects.html',
          'researches.html'
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
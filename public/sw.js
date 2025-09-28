// Service Worker Cleanup for LocalAI Finance
// This service worker immediately unregisters itself to prevent caching issues

self.addEventListener('install', (event) => {
  console.log('Service Worker installing - will self-destruct');
  // Skip waiting and immediately activate
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating - clearing all caches');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      // Delete all caches
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('All caches cleared, unregistering service worker');
      // Unregister this service worker
      return self.registration.unregister();
    }).then(() => {
      // Force reload of all clients
      return self.clients.matchAll();
    }).then((clients) => {
      clients.forEach(client => {
        client.navigate(client.url);
      });
    })
  );
});

// Don't handle any fetch requests
self.addEventListener('fetch', (event) => {
  // Let all requests go to network
  return;
});
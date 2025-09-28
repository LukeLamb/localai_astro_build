// Service Worker Cleanup Script
// This script will unregister any existing service workers to prevent caching issues

if ('serviceWorker' in navigator) {
  // Get all registrations
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    // Unregister each service worker
    for(let registration of registrations) {
      registration.unregister().then(function(boolean) {
        console.log('Service Worker unregistered:', boolean);
      });
    }
  }).catch(function(error) {
    console.log('Service Worker unregistration failed:', error);
  });

  // Also clear any caches
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      console.log('All caches cleared');
      // Reload the page to ensure fresh content
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    });
  }
}
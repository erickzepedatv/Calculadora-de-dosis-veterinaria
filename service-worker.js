// Service Worker - Calculadora Veterinaria PWA
// Versión 1.0.0

const CACHE_NAME = 'vetcalc-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-144.png',
  './icon-152.png',
  './icon-192.png',
  './icon-512.png'
];

// Instalación: cachear todos los recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cacheando recursos...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Recursos cacheados correctamente');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Error al cachear:', err);
      })
  );
});

// Activación: limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service Worker activado');
      return self.clients.claim();
    })
  );
});

// Estrategia: Cache First, luego red
self.addEventListener('fetch', (event) => {
  // Solo manejar GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Si está en cache, devolverlo
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está en cache, intentar red y cachear
        return fetch(event.request)
          .then((response) => {
            // Verificar respuesta válida
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clonar respuesta para cachear
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla la red y no está en cache, mostrar página offline
            console.log('[SW] Sin conexión, recurso no disponible en cache');
          });
      })
  );
});

// Mensajes desde la app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

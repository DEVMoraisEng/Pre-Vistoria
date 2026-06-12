// sw.js — Service Worker para Vistoria Morais Engenharia
// Versão: incrementar aqui força atualização do cache em todos os dispositivos
const CACHE = 'vistoria-morais-v3';

// Todos os arquivos que compõem o app
const ARQUIVOS = [
  './vistoria_reparo.html',
  './manifest.json'
];

// ── INSTALL: baixa e armazena todos os arquivos no cache ──
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARQUIVOS))
  );
  // Ativa imediatamente sem esperar o SW anterior terminar
  self.skipWaiting();
});

// ── ACTIVATE: remove caches antigos de versões anteriores ──
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── FETCH: serve do cache, busca na rede só se necessário ──
self.addEventListener('fetch', e => {
  // Ignora requisições que não são GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached; // Serve do cache (offline ou não)

      // Se não está no cache, tenta buscar na rede e armazena
      return fetch(e.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, responseClone));
          return response;
        })
        .catch(() => {
          // Offline e não está no cache: retorna a página principal como fallback
          return caches.match('./vistoria_reparo.html');
        });
    })
  );
});

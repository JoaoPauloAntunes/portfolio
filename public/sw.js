/* Service Worker — Portfólio (baseado no sw.js do MyFilms)
   - Site (HTML, JS/CSS do Vite, foto, ícones): cache primeiro + revalidação em segundo plano.
     Versão nova ativa na hora e a página recarrega sozinha (ver src/main.tsx).
   - Os arquivos do Vite têm hash no nome, então a lista é lida do index.html na instalação.
   - Google Fonts: cache primeiro, para o site abrir offline com as fontes certas.
   Troque a versão a cada mudança neste arquivo. */
const VERSION = 'v1';
const SHELL = `portfolio-shell-${VERSION}`;
const FONTS = 'portfolio-fonts';
const KEEP = [SHELL, FONTS];
const MAX_SHELL = 60;
const MAX_FONTS = 30;

// Publicado em /portfolio/: tudo é relativo ao escopo do service worker
const BASE = new URL(self.registration.scope).pathname;
const ASSETS = [
  '',
  'manifest.webmanifest',
  'favicon.svg',
  'icon-192.png',
  'images/profile.jpg',
].map((p) => BASE + p);

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

/* Cada arquivo é baixado à parte e ignorando o cache HTTP ({ cache: 'reload' }):
   um 404 não derruba a instalação inteira, e nunca se grava uma versão velha. */
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    const salvar = async (u) => {
      try {
        const res = await fetch(new Request(u, { cache: 'reload' }));
        if (res.ok) await c.put(u, res);
        return res;
      } catch { /* segue sem esse arquivo; o fetch handler pega da rede depois */ }
    };
    const [index] = await Promise.all(ASSETS.map(salvar));
    // JS/CSS com hash que o index.html do build referencia
    if (index?.ok) {
      const html = await (await c.match(BASE)).text();
      const extras = [...html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g)].map((m) => m[1]);
      await Promise.allSettled(extras.map(salvar));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !KEEP.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

// Apaga as entradas mais antigas quando o cache passa do limite
async function trim(name, max) {
  const c = await caches.open(name);
  const keys = await c.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map((k) => c.delete(k)));
}

function put(name, key, res, max) {
  const copy = res.clone();
  caches.open(name).then((c) => c.put(key, copy)).then(() => trim(name, max)).catch(() => {});
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        if (res.ok || res.type === 'opaque') put(FONTS, req, res, MAX_FONTS);
        return res;
      }))
    );
    return;
  }

  // Outros sites (GitHub, LinkedIn, WhatsApp...) e a página de links da raiz passam direto
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  // O CV em PDF abre em outra aba; não vale guardar
  if (url.pathname.endsWith('.pdf')) return;

  // Navegação (SPA de uma página): cai no index em cache quando offline
  const key = req.mode === 'navigate' ? BASE : req;
  e.respondWith(
    caches.match(key, { ignoreSearch: req.mode === 'navigate' }).then((cached) => {
      const rede = fetch(req, { cache: 'no-store' })
        .then((res) => {
          if (res.ok && res.type === 'basic') put(SHELL, key, res, MAX_SHELL);
          return res;
        })
        .catch(() => cached || Response.error());
      return cached || rede;
    })
  );
});

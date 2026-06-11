const CACHE_NAME = "dashboard-operativo-v63";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-180.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/logo-link.png",
  "./assets/logo-link-transparent.png",
  "./assets/link-login-bg.jpg",
  "./assets/logo-steck.png",
  "./assets/utilitario-link.png",
  "./assets/chasis-link.png",
  "./assets/container-china-steck.png",
  "./assets/container-brasil-steck.png",
  "./assets/operario-pallet-in.png",
  "./assets/acumulado-pallets-in.png",
  "./assets/posiciones-mes-anterior.png",
  "./data/hojas-ruta.json",
  "./data/remitos-pdfs.json",
  "./data/unidades-remito.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

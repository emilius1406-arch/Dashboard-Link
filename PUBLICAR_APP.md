# Publicar Dashboard Operativo como app instalable

Para que cualquier telefono pueda instalar la app, no alcanza con `127.0.0.1`.
La app tiene que estar publicada en una URL `https://`.

## Como se instala

### iPhone
1. Abrir la URL publica en Safari.
2. Tocar Compartir.
3. Elegir Agregar a pantalla de inicio.
4. Confirmar el nombre de la app.

### Android
1. Abrir la URL publica en Chrome.
2. Tocar Instalar app o Agregar a pantalla principal.
3. Confirmar.

## Donde publicarla

Opciones simples:

- Vercel
- Netlify
- GitHub Pages
- Un hosting propio con HTTPS

## Archivos importantes

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `app.js`
- `styles.css`
- `assets/`
- `data/hojas-ruta.json`

## Importante

Para que funcione como app instalable en telefonos:

- Tiene que abrir por `https://`.
- El manifest debe estar disponible.
- El service worker debe cargar sin error.
- Los iconos PNG deben existir.
- El telefono tiene que acceder a la misma URL publica, no a una IP local.

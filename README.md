# Casita de la Colina — Pinamar

Landing page estática (HTML/CSS puro, sin dependencias de build).

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `casita-de-la-colina`).
2. Subí todo el contenido de esta carpeta (`index.html`, `images/`, este `README.md`) a la raíz del repo.
   - Opción rápida sin git: en GitHub, "Add file" → "Upload files" → arrastrá los archivos.
   - Opción con git:
     ```
     git init
     git add .
     git commit -m "Landing page Casita de la Colina"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/casita-de-la-colina.git
     git push -u origin main
     ```
3. En el repo: **Settings → Pages**.
4. En "Build and deployment" → "Source", elegí **Deploy from a branch**.
5. En "Branch", elegí **main** y carpeta **/(root)**. Guardá.
6. Esperá 1–2 minutos. La página va a quedar publicada en:
   `https://TU-USUARIO.github.io/casita-de-la-colina/`

## Editar contenido

- Precio, dirección y texto: buscá y editá directamente en `index.html`.
- WhatsApp: el número está en los enlaces `https://wa.me/541134621302...`. Cambialo ahí si hace falta.
- Fotos: reemplazá los archivos dentro de `images/` manteniendo el mismo nombre, o agregá nuevas y actualizá las etiquetas `<img src="images/...">` correspondientes en `index.html`.

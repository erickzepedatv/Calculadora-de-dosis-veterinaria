# 📱 Calculadora Veterinaria de Dosis - Instalable para Celulares

## Versión PWA (Progressive Web App) - 100% Offline

---

## 📦 Contenido del paquete

- `index.html` — Aplicación principal
- `manifest.json` — Configuración de instalación
- `service-worker.js` — Cache para funcionamiento offline
- `icon-*.png` — Íconos de la app (7 tamaños)

---

## 🚀 Instalación en ANDROID (Chrome)

### Opción A: Servidor local (recomendada)

1. Descomprime el ZIP en tu computadora
2. Sube los archivos a cualquier hosting estático:
   - GitHub Pages
   - Netlify Drop (https://app.netlify.com/drop)
   - Vercel
   - O tu propio servidor

3. Abre la URL en Chrome de tu celular
4. Toca el menú (⋮) → **"Agregar a pantalla principal"** o **"Instalar app"**
5. ¡Listo! Aparecerá como app nativa

### Opción B: Servidor local en red WiFi

1. Descomprime el ZIP en una carpeta
2. En esa carpeta, ejecuta un servidor simple:

**Con Python:**
```bash
python -m http.server 8080
```

**Con Node.js:**
```bash
npx serve -l 8080
```

3. Encuentra tu IP local (ej: 192.168.1.100)
4. En el celular (misma red WiFi), abre: `http://192.168.1.100:8080`
5. Chrome → Menú → **"Agregar a pantalla principal"**

---

## 🍎 Instalación en iOS (iPhone/iPad - Safari)

1. Sube los archivos a un hosting (igual que Android)
2. Abre la URL en **Safari**
3. Toca el botón **Compartir** (cuadro con flecha arriba)
4. Selecciona **"Agregar a pantalla de inicio"**
5. Toca **"Agregar"**

> ⚠️ **Nota iOS:** Safari no soporta Service Workers completamente en todas las versiones. La app funcionará, pero el cache offline puede ser limitado.

---

## ✅ Características de la versión móvil

| Característica | Estado |
|---|---|
| Instalable como app nativa | ✓ |
| Funciona sin internet | ✓ (Service Worker) |
| Ícono personalizado | ✓ |
| Pantalla de inicio propia | ✓ |
| Orientación vertical | ✓ |
| localStorage para catálogo | ✓ |
| Responsive para móviles | ✓ |
| Modo standalone (sin barra del navegador) | ✓ |

---

## 🔧 Solución de problemas

### "No aparece la opción de instalar"

- Asegúrate de usar **Chrome** (Android) o **Safari** (iOS)
- La app debe cargarse completamente primero
- En Chrome, busca el banner de instalación en la parte inferior

### "No funciona offline"

- Abre la app una vez con internet para que el Service Worker cachee los recursos
- Luego podrás usarla sin conexión

### "Los medicamentos no se guardan"

- Verifica que el navegador no esté en modo incógnito/privado
- localStorage requiere almacenamiento habilitado

---

## 📋 Requisitos mínimos

| Plataforma | Versión |
|---|---|
| Android | 7.0+ con Chrome 90+ |
| iOS | 14.0+ con Safari |

---

## © 2026 Erick Zepeda. Todos los derechos reservados.

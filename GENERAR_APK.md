# 📦 Opción: Generar APK nativo (Android)

Si prefieres un APK instalable directamente, puedes usar estas herramientas gratuitas:

---

## Opción 1: PWABuilder (Microsoft) - RECOMENDADA

1. Sube la carpeta PWA a un hosting (Netlify, Vercel, GitHub Pages)
2. Ve a https://www.pwabuilder.com/
3. Ingresa la URL de tu app
4. Selecciona **Android**
5. Descarga el APK listo para instalar

**Ventajas:**
- Gratuito
- Genera APK firmado
- Publica en Google Play si lo deseas
- Mantiene todas las funcionalidades PWA

---

## Opción 2: Bubblewrap (Google)

Herramienta oficial de Google para convertir PWAs en APKs:

```bash
# Requisitos: Node.js, Java JDK 11+, Android SDK
npm install -g @bubblewrap/cli

# Inicializar proyecto
bubblewrap init --manifest https://tudominio.com/manifest.json

# Generar APK
bubblewrap build
```

---

## Opción 3: Cordova / Capacitor

```bash
# Instalar Capacitor
npm install @capacitor/core @capacitor/cli

# Inicializar
npx cap init "VetCalc" com.erickzepeda.vetcalc

# Agregar plataforma Android
npx cap add android

# Copiar archivos web
npx cap copy

# Abrir en Android Studio
npx cap open android
```

---

## 📋 Requisitos para APK

| Herramienta | Requisitos |
|---|---|
| PWABuilder | Solo URL pública |
| Bubblewrap | Node.js, JDK 11+, Android SDK |
| Capacitor | Node.js, Android Studio |

---

## ✅ Recomendación

Para uso personal o distribución directa, **PWABuilder** es la más simple:
- No requiere programación
- Genera APK en minutos
- App completamente funcional

---

## © 2026 Erick Zepeda. Todos los derechos reservados.

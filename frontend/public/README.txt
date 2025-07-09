# Public (`/public`)
Esta carpeta contiene archivos estáticos que se sirven directamente desde la raíz del proyecto
cuando se despliega la aplicación. Todo lo que se coloque aquí estará disponible públicamente sin
pasar por el sistema de módulos de JavaScript.
---

## 📁 Contenido actual

| Archivo                         | Propósito                                                                 |
|---------------------------------|--------------------------------------------------------------------------|
| `manifest.webmanifest`          | Archivo de configuración para PWA (Progressive Web App)                  |
| `joum-icon-192x192.png`         | Ícono de la app en formato 192x192 (versión 1)                            |
| `joum-icon-512x512.png`         | Ícono de la app en formato 512x512 (versión 1)                            |
| `joum2-icon-192x192.png`        | Ícono alternativo en formato 192x192 (versión 2)                          |
| `joum2-icon-512x512.png`        | Ícono alternativo en formato 512x512 (versión 2)                          |

---

## Convención

- Los íconos deben seguir las dimensiones estándar para compatibilidad con PWA y dispositivos móviles.
- El archivo `manifest.webmanifest` define el comportamiento de la app cuando se instala como aplicación
web (nombre, íconos, colores, etc.).
- No se deben colocar archivos JavaScript o sensibles en esta carpeta, ya que todo es accesible públicamente.

---


> Esta carpeta es esencial para la configuración de la app como PWA y para servir recursos estáticos accesibles desde la raíz del dominio.

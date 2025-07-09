# Componentes (`/components`)
Esta carpeta contiene todos los componentes visuales. Están organizados por contexto de uso para
mantener una estructura clara, escalable y fácil de mantener.
---

## Estructura de carpetas

| Carpeta              | Propósito general                                                      |
|----------------------|------------------------------------------------------------------------|
| `common/`            | Componentes reutilizables y genéricos (botones, modales, formularios…) |
| `admin/`             | Componentes exclusivos del panel de administración                     |
| `translation/`       | Componentes específicos del flujo de traducción y pronunciación        |

---

## Componentes destacados

| Componente                              | Ubicación              | Propósito principal                                 |
|-----------------------------------------|------------------------|-----------------------------------------------------|
| `Button.jsx`                            | `common/`              | Botón reutilizable con estilos personalizados       |
| `Modal.jsx`                             | `common/`              | Ventana modal genérica con cierre por fondo o icono |
| `Form.jsx`                              | `common/`              | Contenedor del flujo de traducción                  |
| `Header.jsx` / `Footer.jsx`             | `common/`              | Cabecera y pie de página de la app                  |
| `AdminPanel.jsx`                        | `admin/`               | Panel para revisar y moderar sugerencias            |
| `TranslationResult.jsx`                 | `translation/`         | Entrada y resultado de traducción                   |
| `VoicePlayer.jsx` / `AudioControls.jsx` | `translation/`         | Reproducción de voz y ajustes de audio              |
| `PronunciationSuggestionModal.jsx`      | `common/` (temporal)   | Modal para sugerir una pronunciación alternativa    |

---

## Notas

- Algunos componentes como `PronunciationSuggestionModal` están en `common/` por simplicidad, aunque podrían moverse a `translation/`
si su uso se vuelve más específico.
- Si se añaden nuevos contextos (por ejemplo, `user/`, `settings/`, etc.), deben seguir esta misma estructura modular.

---

> La documentación de cada subcarpeta (`common`, `admin`, `translation`) incluye detalles específicos de cada componente.

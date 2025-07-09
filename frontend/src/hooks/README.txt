# Hooks personalizados (`/hooks`) 

Esta carpeta contiene hooks personalizados que encapsulan lógica reutilizable
y conectan distintos stores, servicios y componentes de forma limpia.
Los hooks permiten mantener los componentes más simples, delegando la lógica de
negocio y estado a funciones especializadas.

---

## 📚 Hooks disponibles

|---------------------------------|-----------------------------------------------------------------------|
| `useTranslation.js`             | Traduce una palabra y obtiene su pronunciación desde la base de datos |
| `useSuggestion.js`              | Gestiona el envío y revisión de sugerencias                           |
| `usePronunciationSuggestion.js` | Controla el flujo de sugerencia de pronunciación para una palabra     |
| `useAdminAuth.js`               | Gestiona la autenticación local del panel de administración           |
| `useModal.js`                   | Controla la visibilidad de modales con lógica desacoplada             |

---


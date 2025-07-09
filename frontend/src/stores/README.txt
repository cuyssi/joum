# Zustand Stores en Joum

Esta carpeta contiene los stores globales de estado creados con [Zustand](https://zustand-demo.pmnd.rs/).

Cada store encapsula una parte del estado de la aplicación y su lógica asociada, permitiendo:

- Compartir estado entre componentes sin prop drilling
- Separar lógica de red y UI
- Mantener el código modular y escalable

## Stores disponibles

| Archivo                   | Propósito                                                   |
|---------------------------|-------------------------------------------------------------|
| `useWordStore.js`         | Guarda la palabra introducida y si se ha buscado            |
| `useTranslationStore.js`  | Traduce la palabra usando la API                            |
| `useDictionaryStore.js`   | Busca la pronunciación en la base de datos                  |
| `useAudioStore.js`        | Controla volumen, velocidad y desbloqueo de síntesis de voz |


> Todos los stores siguen el mismo patrón: estado inicial, funciones de actualización, y manejo
de errores si aplica.
---

Puedes consultar cada archivo para ver su implementación específica.
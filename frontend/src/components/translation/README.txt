# Componentes de traducción (`/components/translation`)
Esta carpeta contiene los componentes específicos del flujo de traducción. Están diseñados para
mostrar resultados, pronunciaciones y permitir interacción con el usuario de forma accesible y visual.

---

## Componentes disponibles

| Componente                         | Propósito                                                                    |
|------------------------------------|------------------------------------------------------------------------------|
| `TranslationResult.jsx`            | Permite introducir una palabra, obtener su traducción y mostrar el resultado |
| `Pronunciation.jsx`                | Muestra la pronunciación asociada a la palabra traducida                     |
| `VoicePlayer.jsx`                  | Reproduce la traducción en voz con controles de velocidad y volumen          |
| `AudioControls.jsx`                | Permite ajustar la velocidad y el volumen del audio de pronunciación         |

---

## Convención

- Los componentes de esta carpeta están pensados para ser usados exclusivamente dentro del flujo principal de traducción
- Se apoyan en hooks como `useWordStore`, `useTranslation`, `usePronunciationSuggestion`, `useAudioStore` y `useModal`
- Están estilizados con Tailwind CSS y utilizan componentes comunes como `Button` y `Modal`
---
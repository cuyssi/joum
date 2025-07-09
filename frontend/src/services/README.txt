# Servicios 

Esta carpeta contiene funciones que encapsulan las llamadas al la API del backend. El objetivo es
centralizar la lógica de red y mantener los componentes limpios.
---

# Archivos disponibles

| Archivo                | Propósito                                                                 |
|------------------------|---------------------------------------------------------------------------|
| `api.js`               | Funciones generales para traducir palabras y buscar pronunciaciones       |
| `suggestionService.js` | Funciones específicas para enviar y revisar sugerencias desde el frontend |


# Convención

Todas las funciones exportadas son asíncronas y devuelven datos ya parseados (JSON). Los errores se manejan
en los stores o componentes que las consumen.



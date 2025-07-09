# Vistas (`/pages`) en Joum

Esta carpeta contiene las vistas principales de la aplicación, es decir, los componentes que representan pantallas completas dentro del flujo de navegación de Joum.

Cada archivo en esta carpeta corresponde a una ruta definida en el enrutador (`App.jsx`)
y se encarga de orquestar la lógica y los componentes necesarios para esa sección.

---

## Vistas disponibles

| Archivo        | Propósito                                                                 |
|----------------|---------------------------------------------------------------------------|
| `Home.jsx`     | Vista principal donde el usuario introduce una palabra para traducirla    |
| `Admin.jsx`    | Vista protegida para el administrador, autenticación y revisión           |

---

## Convención

- Cada vista importa y utiliza componentes reutilizables desde `/components`
- El estado global se gestiona con Zustand (`/stores`)
- La lógica de red se delega a funciones en `/services`
- Las vistas son responsables de manejar eventos de usuario y renderizar la UI

---


# Joum — Traductor con pronunciación y sugerencias personalizadas

**Joum** es una aplicación web construida con **FastAPI** y **Vite** que te permite traducir palabras al inglés, consultar su pronunciación adaptada al español y, si no te convence (o no existe esa entrada aún), enviar una sugerencia personalizada que será revisada por un administrador.

Además, Joum es una **Progressive Web App (PWA)**, lo que significa que puedes instalarla como una app nativa en tu móvil directamente desde el navegador.

Solo entra en https://joum.anacas.dev desde tu móvil y el navegador te sugerirá instalarla automáticamente.



![image](https://github.com/user-attachments/assets/77a768c1-43a5-4c44-84fb-6c7d2975ca1a)



---

## 🚀 Tecnologías utilizadas

| Área            | Tecnología           |
|------------------|----------------------|
| Frontend         | Vite + React / Vue   |
| Backend          | FastAPI (Python)     |
| Base de datos    | MongoDB (Atlas)      |
| Infraestructura  | Docker + Coolify     |
| Automatización   | n8n                  |


---

## 🧩 Arquitectura general

- El frontend se comunica con el backend mediante una API REST.
- El backend consulta una base de datos MongoDB con dos colecciones principales:
  - `palabras`: entradas ya validadas con traducción y pronunciación.
  - `sugerencias`: propuestas de los usuarios para mejorar o añadir traducciones.
- Las sugerencias pueden revisarse manualmente desde un panel de administración, o automáticamente desde servicios externos como Discord o Telegram.
- Todo está desplegado con **Coolify**, usando contenedores Docker.

---

## 🧠 Integraciones externas (opcional)

Aunque no están incluidas directamente en el código fuente, Joum se puede ampliar fácilmente con herramientas externas para automatizar y escalar su funcionamiento. En mi caso, utilicé:

### 🔧 Coolify

- Para desplegar tanto el frontend como el backend en contenedores Docker.
- Permite gestionar variables de entorno, dominios personalizados y certificados SSL con facilidad.
- Ideal para despliegues rápidos sin necesidad de configurar servidores manualmente.

### 🔁 n8n + MongoDB Atlas Trigger

- Configuré un trigger en MongoDB Atlas que detecta nuevas sugerencias insertadas.
- Ese trigger:
  - Envía una notificación al administrador (por ejemplo, por Telegram o email).
  - Permite aprobar o rechazar la sugerencia desde el propio mensaje activando un flujo con n8n.
  - Si se aprueba, la sugerencia se inserta automáticamente en la colección `palabras`.

> Estas integraciones no están incluidas en el código, pero es una forma de que Joum conectandose con servicios externos pueda ser un sistema más automatizado y eficiente.


---

## 🌐 ¿Quieres probarlo?

Puedes ver la app en acción en:

👉 [https://joum.anacas.dev](https://joum.anacas.dev)

Además, puedes instalarla en tu móvil como si fuera una app. Solo visita la web y el navegador te sugerirá añadirla a la pantalla de inicio.

---

## ⚠️ Requisitos para clonar el proyecto

Si quieres montar Joum en tu entorno local o desplegarlo por tu cuenta:

1. Clona el repositorio
2. Configura tus propias variables de entorno (`.env`)
3. Personaliza los dominios y los servicios en Coolify
4. Asegúrate de tener Docker y acceso a MongoDB Atlas

---

## Seguímos aprendiendo 🚀



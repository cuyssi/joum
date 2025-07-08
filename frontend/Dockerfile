# ------------------------------------------------------------------------------
# Dockerfile para el frontend de Joum
#
# Este archivo define una imagen multietapa para construir y servir la aplicación
# frontend de Joum con Vite y Nginx. Durante la etapa de build, se inyecta la
# variable de entorno VITE_API_URL para que esté disponible en tiempo de compilación.
#
# Etapas:
# 1. Build: compila el frontend con Vite usando Node.js
# 2. Producción: sirve los archivos estáticos con Nginx
#
# Requisitos:
# - La variable VITE_API_URL debe ser pasada como argumento de build
# - docker-compose.yml debe incluir:
#     args:
#       VITE_API_URL: ${VITE_API_URL}
#
# Autor: Ana Castro
# ------------------------------------------------------------------------------


FROM node:18-alpine AS builder

ARG VITE_API_URL

WORKDIR /app
COPY . .

RUN echo "VITE_API_URL=$VITE_API_URL" > .env.production

RUN npm install
RUN VITE_API_URL=$VITE_API_URL npm run build


FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

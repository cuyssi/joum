# Etapa 1: Construcción de la aplicación React + Vite
FROM node:18-alpine as builder

WORKDIR /app

# Copia los archivos de definición de dependencias primero para aprovechar la caché de Docker.
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código fuente del frontend
COPY . .

# Construye la aplicación (esto generará los archivos estáticos en '/app/dist' dentro de esta etapa)
RUN npm run build

# Etapa 2: Servir la aplicación estática usando Nginx
FROM nginx:alpine

# ¡IMPORTANTE! Copia los archivos estáticos construidos desde la etapa 'builder'
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia tu configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
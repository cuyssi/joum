# Usa una imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expón el puerto en el que Nginx escuchará
EXPOSE 80

# Usa Nginx para servir la app en producción
FROM nginx:alpine

# Copia los archivos de la build de React a la carpeta de Nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Copia la configuración de Nginx (asegúrate de tener un archivo nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]

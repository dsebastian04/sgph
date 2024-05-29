# Etapa 1: Construcción
FROM node:14-alpine AS build
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto de la aplicación
COPY . .
# Compilar la aplicación
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine
# Copiar archivos de build al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html
# Copiar archivo de configuración de Nginx personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exponer el puerto 80
EXPOSE 80
# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
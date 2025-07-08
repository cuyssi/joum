# -------------------------------------------------------------------------
# Dockerfile para la API de Joum
#
# Este documento define la imagen necesaria para desplegar el proyecto en un servidor.
# Instala las dependencias, copia la aplicación, expone el puerto y define el comando
# para ejecutar la API con Uvicorn.
#
# Author: Ana Castro
# -------------------------------------------------------------------------

FROM python:3.11

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

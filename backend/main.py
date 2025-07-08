# -------------------------------------------------------------------------------------------------------------------------------
# main.py - Punto de entrada de la API para Joum.
# Esta aplicación está construida con FastAPI y actúa como backend para el proyecto Joum.
# Su función principal es recibir peticiones del frontend, procesarlas y comunicarse con la base de datos MongoDB.
# Aquí se configuran los routers de las distintas funcionalidades (traducción, diccionario, sugerencias y administración),
# y se habilita el acceso desde el frontend mediante configuración CORS.
#
#  - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
# | FUNCIONAMIENTO Joum:                                                                                                         |
#   El usuario ingresa lo que quiere traducir en el frontend, por un lado se traduce con python y por otro                       |
# | lado se busca la pronunciacion en la db dictionary alojada en Mongodb. Si la pronuncinación no se encuentra regitrada o el   |
# | usuario no le parece correcta la existente se le da la posibilidad de proponer una sugerencia que será aprobada o rechazada  |
# | por el administrador, siendo así añadida a la db o no.                                                                       |
# | La db dictionary contien 2 colecciones:                                                                                      |
# |         -"palabras" en donde se alojan las entradas existentes en la db.                                                     |
# |         -"sugerencias" en donde se alojan las sugerencias de los usuarios para posterior revisión del admin.                 |
#  - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
#
#  Author: Ana Castro
# ---------------------------------------------------------------------------------------------------------------------------------

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import translation, dictionary, suggestion, admin
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(translation.router)
app.include_router(dictionary.router)
app.include_router(suggestion.router, prefix="/sugerencias")
app.include_router(admin.router, prefix="/admin")

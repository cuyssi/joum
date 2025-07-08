# ------------------------------------------------------------------------------
# database/mongo.py - Funciones de acceso a la base de datos MongoDB para Joum
#
# Este módulo gestiona la conexión con la base de datos y define funciones para
# interactuar con las colecciones "palabras" y "sugerencias".
#
# Funcionalidades principales:
# - Guardar y actualizar palabras con su traducción y pronunciación
# - Guardar sugerencias de pronunciación propuestas por usuarios
# - Obtener sugerencias pendientes para revisión
# - Aprobar o rechazar sugerencias y actualizar la colección principal.
# - Eliminar sugerencias específicas
#
# Colecciones utilizadas:
# - "palabras": contiene las entradas oficiales del diccionario
# - "sugerencias": contiene las propuestas enviadas por los usuarios
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from pymongo import MongoClient
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

client = MongoClient(os.getenv("MONGO_URL"))
db = client[os.getenv("DB_NAME")]

palabras_collection = db["palabras"]
sugerencias_collection = db["sugerencias"]


def get_pronunciation(translation: str):
    result = palabras_collection.find_one({"translation": translation})
    return result["pronunciation"] if result else None


def save_word(word: str, translation: str, pronunciation: str):
    palabras_collection.update_one(
        {"word": word},
        {"$set": {"translation": translation, "pronunciation": pronunciation}},
        upsert=True,
    )


def save_suggestion(word, pronunciation):
    existente = palabras_collection.find_one({"word": word})
    tipo = "modificación" if existente else "nueva"
    sugerencia = {
        "translation": word,
        "suggested_pronunciation": pronunciation,
        "status": "pendiente",
        "tipo": tipo,
        "fecha": datetime.now(),
    }

    sugerencias_collection.insert_one(sugerencia)


def get_all_suggestions():
    suggestions = []
    for doc in sugerencias_collection.find({"status": "pendiente"}):
        doc["_id"] = str(doc["_id"])
        suggestions.append(doc)
    return suggestions


def update_suggestion_status(
    translation: str, suggested_pronunciation: str, new_status: str
):
    result = sugerencias_collection.update_one(
        {
            "translation": translation,
            "suggested_pronunciation": suggested_pronunciation,
        },
        {"$set": {"status": new_status}},
    )
    if new_status == "aprobado":
        palabras_collection.update_one(
            {"translation": translation},
            {"$set": {"pronunciation": suggested_pronunciation}},
            upsert=True,
        )
    return result.modified_count


def delete_suggestion(translation: str, pronunciation: str):
    sugerencias_collection.delete_one(
        {"translation": translation, "suggested_pronunciation": pronunciation}
    )

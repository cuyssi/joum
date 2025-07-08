# ------------------------------------------------------------------------------
# routers/dictionary.py - Endpoints para gestión de palabras en Joum
#
# Este módulo define los endpoints relacionados con la coleccion "palabras" de la
# db "dictionary" alojada en mongodb.
# Permite buscar la pronunciación de una palabra y guardar nuevas entradas una vez
# aprobadas por el admin.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from fastapi import APIRouter
from schemas.word_schema import WordSchema
from database.mongo import (
    save_word,
    get_pronunciation,
)
from utils.text_utils import normalizar

router = APIRouter()


@router.get("/buscar")
def buscar(word: str):
    word = normalizar(word)
    pronunciation = get_pronunciation(word)
    return {"word": word, "pronunciation": pronunciation}


@router.post("/guardar")
def guardar_palabra(data: WordSchema):
    word_normalizada = normalizar(data.word)
    save_word(data.word, data.translation, data.pronunciation)
    return {"message": "Palabra guardada correctamente"}

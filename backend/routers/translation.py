# ------------------------------------------------------------------------------
# routers/translation.py - Endpoint de traducción para Joum
#
# Este módulo define el endpoint para traducir palabras del español al inglés.
# Recibe una palabra desde el frontend, la normaliza con text_utils.py/normalizar y devuelve su traducción
# utilizando el servicio de traducción services/translator/translate_word.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from fastapi import APIRouter
from schemas.word_schema import WordRequest
from services.translator import translate_word
from utils.text_utils import normalizar

router = APIRouter()


@router.post("/traducir")
def traducir(data: WordRequest):
    palabra = normalizar(data.word)
    traduccion = translate_word(palabra)
    return {"original": palabra, "translation": traduccion}

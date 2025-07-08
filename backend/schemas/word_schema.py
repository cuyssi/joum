# ------------------------------------------------------------------------------
# schemas/word_schema.py - Esquemas de validación para palabras en Joum
# Este módulo define los modelos Pydantic utilizados para validar y estructurar
# los datos relacionados con las entradas en la colección "palabras" alojada en dictionary (es la db en mongodb).
# Incluye el esquema para peticiones de búsqueda y el modelo completo de una
# palabra registrada.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from pydantic import BaseModel
from typing import Literal
from datetime import datetime

class WordRequest(BaseModel):
    word: str


class WordSchema(BaseModel):
    word: str
    translation: str
    pronunciation: str

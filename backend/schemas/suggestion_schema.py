# ------------------------------------------------------------------------------
# schemas/suggestion.py - Esquemas de validación para sugerencias en Joum
#
# Este módulo define los modelos Pydantic utilizados para validar y estructurar
# los datos relacionados con sugerencias de traducción alojadas en la coleccion
# "sugerencias" en dictionary (db en mongodb). Incluye el esquema base
# para usuarios y una versión extendida para administración.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from pydantic import BaseModel
from typing import Literal
from datetime import datetime


class SuggestionSchema(BaseModel):
    translation: str
    suggested_pronunciation: str


class SuggestionAdminSchema(SuggestionSchema):
    status: Literal["pendiente", "aprobado", "rechazado"]
    fecha: datetime

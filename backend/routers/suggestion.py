# ------------------------------------------------------------------------------
# routers/suggestion.py - Endpoints de sugerencias para Joum
#
# Este módulo permite a los usuarios enviar nuevas sugerencias a la coleccion
# "sugerencias" en la db "dictionary" (mongodb), para su revisión por parte del admin.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from fastapi import APIRouter
from schemas.suggestion_schema import SuggestionSchema
from database.mongo import save_suggestion, get_all_suggestions

router = APIRouter()


@router.post("/sugerir")
def sugerir_palabra(data: SuggestionSchema):
    save_suggestion(data.translation, data.suggested_pronunciation)
    return {"message": "Sugerencia enviada ✅"}

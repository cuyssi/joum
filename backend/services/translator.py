# ------------------------------------------------------------------------------
# services/translator.py - Función de traducción para Joum
#
# Esta función utiliza la librería deep_translator para traducir una palabra
# del español al inglés.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

from deep_translator import GoogleTranslator

def translate_word(word: str) -> str:
    try:
        translated = GoogleTranslator(source="es", target="en").translate(word)
        return translated
    except Exception as e:
        print("Error al traducir:", e)
        return "Error al traducir"

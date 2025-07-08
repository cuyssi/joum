# ------------------------------------------------------------------------------
# normalizar.py - Utilidades de limpieza de texto para Joum.

# Esta función sirve para normalizar las palabras que ingresa el usuario,
# eliminando tildes, convirtiendo el texto a minúsculas y quitando espacios.
#
# Author: Ana Castro
# ------------------------------------------------------------------------------

import unicodedata


def normalizar(text):
    return "".join(
        char
        for char in unicodedata.normalize("NFD", text.strip())
        if unicodedata.category(char) != "Mn"
    ).lower()

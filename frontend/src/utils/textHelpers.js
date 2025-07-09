// ------------------------------------------------------------------------------
// utils/textHelpers.js - Utilidades para limpiar texto en Joum
//
// cleanWord(str): normaliza una palabra eliminando espacios, acentos y
// convirtiéndola a minúsculas. Se usa antes de enviar palabras a traducir
// o buscar en la base de datos.
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

export const cleanWord = (str) =>
    str
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

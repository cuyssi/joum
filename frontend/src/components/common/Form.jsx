// ------------------------------------------------------------------------------
// components/common/Form.jsx - Contenedor del flujo//
// Este componente representa el formulario principal de la aplicación. Agrupa
// los elementos visuales que muestran el resultado de la traducción, la
// pronunciación y el reproductor de voz.
//
// Props:
// - className (string): clases CSS para personalizar el estilo del formulario
// - onSubmit (function): función que se ejecuta al enviar el formulario
//
// Componentes incluidos:
// - <TranslationResult />: muestra la traducción obtenida
// - <Pronunciation />: muestra la pronunciación asociada
// - <VoicePlayer />: permite reproducir la pronunciación en voz
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import TranslationResult from "../translation/TranslationResult";
import VoicePlayer from "../translation/VoicePlayer";
import Pronunciation from "../translation/Pronuntation";

const Form = ({ className, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            <TranslationResult />
            <Pronunciation />
            <VoicePlayer />
        </form>
    );
};

export default Form;

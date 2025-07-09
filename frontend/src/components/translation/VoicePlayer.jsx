// ------------------------------------------------------------------------------
// components/translation/VoicePlayer.jsx - Reproductor de voz para traducciones//
// Este componente permite reproducir en voz alta la traducción obtenida,
// utilizando la API de síntesis de voz del navegador (`SpeechSynthesis`).
// También incluye controles para ajustar la velocidad y el volumen.
//
// Funcionalidades:
// - Reproduce la traducción en inglés británico (`en-GB`)
// - Permite ajustar `rate` (velocidad) y `volume` (volumen) desde el store
// - Muestra un botón de reproducción con icono y controles deslizantes
//
// Hooks utilizados:
// - useTranslationStore(): obtiene la traducción actual
// - useAudioStore(): obtiene y gestiona `rate` y `volume`
//
// Componentes utilizados:
// - <Button />: botón de reproducción con icono de altavoz
// - <AudioControls />: controles deslizantes para velocidad y volumen
//
// Notas:
// - Si no hay traducción disponible, el componente no se renderiza
// - Se cancela cualquier reproducción anterior antes de iniciar una nueva
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import Button from "../common/Button";
import AudioControls from "./AudioControls";
import { useTranslationStore } from "../../stores/useTranslationStore";
import { useAudioStore } from "../../stores/useAudioStore";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const VoicePlayer = () => {
    const { translation } = useTranslationStore();
    const { rate, volume } = useAudioStore();

    const speak = () => {
        if (!translation) return;
        const utterance = new SpeechSynthesisUtterance(translation);
        utterance.lang = "en-GB";
        utterance.rate = rate;
        utterance.volume = volume;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    };

    if (!translation) return null;

    return (
        <div className="mt-8 flex flex-row items-center justify-center border px-4 pb-4 border-blue-200 rounded-xl gap-10 w-[100%] max-w-sm mx-auto mb-4">
            <Button
                onClick={speak}
                text={<HiOutlineSpeakerWave />}
                className="flex-1 mt-5 bg-gray-200 text-blue-900 border-gray-200 text-4xl active:scale-90 px-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 mx-auto"
            />
            <AudioControls />
        </div>
    );
};

export default VoicePlayer;

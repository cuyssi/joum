// ------------------------------------------------------------------------------
// store/useAudioStore.js - Estado global para control de audio en Joum
//
// Este store de Zustand gestiona los parámetros de reproducción de voz
// (volumen y velocidad) y desbloquea el uso de la API de síntesis de voz
// en navegadores que requieren interacción previa.
//
// Funciones disponibles:
// Estado expuesto:
// - rate: velocidad de reproducción
// - volume: volumen de la voz
// - hasUnlocked: flag interno para evitar múltiples desbloqueos
// - unlockSpeech(): función auxiliar que lanza una utterance silenciosa
//   para desbloquear speechSynthesis en navegadores como Chrome, que no reproducen sonido
//   hasta que haces una primera interacción. 
//
// Author: Ana Castro

import { create } from "zustand";

export const unlockSpeech = () => {
    const { hasUnlocked, setHasUnlocked } = useAudioStore.getState();
    if (hasUnlocked) return;
    
    const dummy = new SpeechSynthesisUtterance(" ");
    dummy.volume = 0;
    dummy.rate = 1;
    dummy.lang = "en-GB";
    speechSynthesis.speak(dummy);
    setHasUnlocked();
};

export const useAudioStore = create((set) => ({
    rate: 1,
    volume: 0.5,
    setRate: (rate) => set({ rate }),
    setVolume: (volume) => set({ volume }),
    setHasUnlocked: () => set({ hasUnlocked: true }),
}));

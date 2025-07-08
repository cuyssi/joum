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

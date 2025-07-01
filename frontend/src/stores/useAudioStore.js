import { create } from "zustand";

export const useAudioStore = create((set) => ({
    rate: 1,
    volume: 0.5,
    setRate: (rate) => set({ rate }),
    setVolume: (volume) => set({ volume }),
}));

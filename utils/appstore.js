import { create } from 'zustand'

export const useTradeStore = create((set) => ({
  authToken: "",
  // increasePopulation: () => set((state) => ({ bears: state.bears + 11 })),
  setCooky: (texty) => set((state) => ({ authToken: texty})),
  // removeAllBears: () => set({ bears: 0 }),
}))
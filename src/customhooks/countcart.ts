import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
  pokemonId: Array<string>;
  addId: (id: string) => void;
  removeId: (id: string) => void;
};

export const useStore = create<Store>()((set) => ({
  count: 0,
  pokemonId: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  addId: (id) => set((state) => ({ pokemonId: [...state.pokemonId, id] })),
  removeId: (id) =>
    set((state) => {
      state.pokemonId.splice(state.pokemonId.indexOf(id), 1);
      return {
        pokemonId: [...state.pokemonId],
      };
    }),
}));

export default useStore;

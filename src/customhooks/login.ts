import { create } from "zustand";

interface login {
  isLogIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useLogin = create<login>()((set) => ({
  isLogIn: false,
  login: () => set((state) => ({ isLogIn: true })),
  logout: () => set((state) => ({ isLogIn: false })),
}));

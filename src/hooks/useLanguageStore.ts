import { create } from "zustand";
import { LanguageState } from "~/models";

const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
}));

export default useLanguageStore;

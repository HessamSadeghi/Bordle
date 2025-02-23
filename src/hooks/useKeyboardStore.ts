import { create } from "zustand";
import { ENGLISH_LETTERS } from "~/data";
import { KeyboardState } from "~/models";

const useKeyboardStore = create<KeyboardState>((set) => ({
  letters: ENGLISH_LETTERS.map((letter) => ({ value: letter, color: 0 })),
  setLetters: (values: string[]) =>
    set({ letters: values.map((letter) => ({ value: letter, color: 0 })) }),
  setLetterColor: (value: string, color: number) => {
    set((state) => ({
      letters: state?.letters.map((letter) =>
        letter.value === value ? { ...letter, color } : letter
      ),
    }));
  },
}));

export default useKeyboardStore;

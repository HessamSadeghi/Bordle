import { Cell } from "~/models";

export interface KeyboardState {
  letters: Cell[];
  setLetters: (values: string[]) => void;
  setLetterColor: (value: string, color: number) => void;
}

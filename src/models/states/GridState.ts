import { Cell } from "~/models";

export interface GridState {
  // State
  currentCell: {
    row: number;
    col: number;
  };
  grid: Cell[][];
  gameOver: boolean;
  theEnglishWord: string;
  thePersianhWord: string;
  // Functions
  setCellValue: (
    row: number,
    col: number,
    value: string,
    color: number
  ) => void;
  resetGame: () => void;
  setGameOver: (gameOver: boolean) => void;
  setCurrentCell: (row: number, col: number) => void;
}

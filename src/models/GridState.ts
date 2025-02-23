import { Cell } from "./Cell";
import { NotificationType } from "./NotificationType";

export interface GridState {
  // State
  currentCell: {
    row: number;
    col: number;
  };
  notification: {
    type: NotificationType;
    message: string;
  };
  grid: Cell[][];
  letters: Cell[];
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
  setLetters: (values: string[]) => void;
  setGameOver: (gameOver: boolean) => void;
  setCurrentCell: (row: number, col: number) => void;
  setLetterColor: (value: string, color: number) => void;
  setNotification: (type: NotificationType, message: string) => void;
}

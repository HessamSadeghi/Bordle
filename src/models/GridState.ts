import { Cell } from "./Cell";
import { NotificationType } from "./NotificationType";

export interface GridState {
  // State
  gameOver: boolean;
  grid: Cell[][];
  theEnglishWord: string;
  thePersianhWord: string;
  current: {
    row: number;
    col: number;
  };
  notification: {
    type: NotificationType;
    message: string;
  };
  // Functions
  resetGame: () => void;
  setCellValue: (
    row: number,
    col: number,
    value: string,
    color: number
  ) => void;
  setCurrent: (row: number, col: number) => void;
  setGameOver: (gameOver: boolean) => void;
  setNotification: (type: NotificationType, message: string) => void;
}

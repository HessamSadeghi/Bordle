import { create } from "zustand";
import { ENGLISH_WORDS, PERSIAN_WORDS } from "~/data";
import { CellColor, GridState, NotificationType } from "~/models";

const useGameStore = create<GridState>((set) => ({
  current: {
    row: 0,
    col: 0,
  },
  gameOver: false,
  grid: Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => ({ value: "", color: 0 }))
  ),
  notification: {
    type: "error" as NotificationType,
    message: "",
  },
  theEnglishWord: ENGLISH_WORDS[Math.floor(Math.random() * 100) + 1],
  thePersianhWord: PERSIAN_WORDS[Math.floor(Math.random() * 100) + 1],
  resetGame: () =>
    set(() => ({
      grid: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => ({
          value: "",
          color: CellColor.Default,
        }))
      ),
      current: { row: 0, col: 0 },
      theEnglishWord: ENGLISH_WORDS[Math.floor(Math.random() * 100) + 1],
      thePersianhWord: PERSIAN_WORDS[Math.floor(Math.random() * 100) + 1],
      notification: { type: NotificationType.Error, message: "" },
      gameOver: false,
    })),
  /**
   * Updates the value and color of a cell in the grid.
   * Performs a deep copy to ensure state immutability.
   * @param row - The row index of the cell.
   * @param col - The column index of the cell.
   * @param value - The new value for the cell.
   * @param color - The new color state for the cell.
   */
  setCellValue: (row, col, value, color) =>
    set((state) => {
      if (
        row < 0 ||
        row >= state.grid.length ||
        col < 0 ||
        col >= state.grid[0].length
      ) {
        console.error(`Invalid row (${row}) or column (${col})`);
        return state; // Return the current state without changes
      }
      const newGrid = state.grid.map((r) => r.map((cell) => ({ ...cell })));
      newGrid[row][col] = { value, color };
      return { grid: newGrid };
    }),
  setCurrent: (row, col) => set({ current: { row, col } }),
  setGameOver: (gameOver) => set({ gameOver }),
  setNotification: (type, message) => set({ notification: { type, message } }),
}));

export default useGameStore;

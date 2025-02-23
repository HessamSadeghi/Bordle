import { create } from "zustand";
import { CellColor, GridState } from "~/models";
import { ENGLISH_WORDS, PERSIAN_WORDS } from "~/data";

const useGameStore = create<GridState>((set) => ({
  // State
  gameOver: false,
  currentCell: {
    row: 0,
    col: 0,
  },
  grid: Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => ({ value: "", color: 0 }))
  ),
  theEnglishWord: ENGLISH_WORDS[Math.floor(Math.random() * 100) + 1],
  thePersianhWord: PERSIAN_WORDS[Math.floor(Math.random() * 100) + 1],
  // Functions
  resetGame: () =>
    set(() => ({
      gameOver: false,
      currentCell: { row: 0, col: 0 },
      grid: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => ({
          value: "",
          color: CellColor.Default,
        }))
      ),
      theEnglishWord: ENGLISH_WORDS[Math.floor(Math.random() * 100) + 1],
      thePersianhWord: PERSIAN_WORDS[Math.floor(Math.random() * 100) + 1],
    })),
  setCellValue: (row, col, value, color) =>
    set((state) => {
      if (
        row < 0 ||
        row >= state.grid.length ||
        col < 0 ||
        col >= state.grid[0].length
      ) {
        console.error(`Invalid row (${row}) or column (${col})`);
        return state;
      }
      const newGrid = state.grid.map((r) => r.map((cell) => ({ ...cell })));
      newGrid[row][col] = { value, color };
      return { grid: newGrid };
    }),
  setCurrentCell: (row, col) => set({ currentCell: { row, col } }),
  setGameOver: (gameOver) => set({ gameOver }),
}));

export default useGameStore;

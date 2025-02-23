import { type FC } from "react";
import { useGameStore } from "~/hooks";

const Grid: FC = () => {
  const { grid, currentCell } = useGameStore();

  return (
    <div className="grid grid-cols-5 gap-2 p-1">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const cellStyle = () => {
            if (cell.color === 1) {
              return "border-red-200 bg-red-100";
            } else if (cell.color === 2) {
              return "border-orange-200 bg-orange-100";
            } else if (cell.color === 3) {
              return "border-green-200 bg-green-100";
            } else if (cell.color === 4) {
              return "border-gray-400 bg-white";
            } else if (rowIndex === currentCell.row) {
              return "border-sky-200 bg-sky-100";
            } else if (cell.color === 0) {
              return "border-gray-200 bg-gray-100";
            }
          };
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex flex-col justify-center w-16 h-16 text-center
              border-2 rounded text-2xl font-bold ${cellStyle()}`}
            >
              {cell.value.length > 0 && cell.value}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Grid;

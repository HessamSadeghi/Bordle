import type { FC } from "react";
import { Cell } from "~/models";
import { useInputs } from "~/hooks";

const LetterButton: FC<Cell> = ({ value, color }) => {
  const { gameOver, handleClick } = useInputs();

  const cellStyle = () => {
    if (color === 1) {
      return "border-red-200 bg-red-100";
    } else if (color === 2) {
      return "border-orange-200 bg-orange-100";
    } else if (color === 3) {
      return "border-green-200 bg-green-100";
    }
  };

  return (
    <button
      disabled={gameOver}
      onClick={() => handleClick(value)}
      className={`flex flex-col justify-center items-center w-8 h-8 md:w-16 md:h-16 text-center
      border-2 border-gray-200 rounded md:text-2xl font-bold bg-gray-100 hover:bg-gray-300 
      hover:border-gray-300 ${cellStyle()}`}
    >
      {value}
    </button>
  );
};

export default LetterButton;

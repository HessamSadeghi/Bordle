import type { FC } from "react";
import { useInputs } from "~/hooks";

interface LetterButtonProps {
	input: string;
}

const LetterButton: FC<LetterButtonProps> = ({ input }) => {
	const { gameOver, handleClick } = useInputs();

	return (
		<button
			disabled={gameOver}
			onClick={() => handleClick(input)}
			className='flex flex-col justify-center items-center w-16 h-16 text-center border-2
      border-gray-200 rounded text-2xl font-bold bg-gray-100 hover:bg-gray-300 hover:border-gray-300'>
			{input}
		</button>
	);
};

export default LetterButton;

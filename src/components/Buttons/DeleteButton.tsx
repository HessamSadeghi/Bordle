import type { FC } from "react";
import { useInputs, useTranslation } from "~/hooks";

const DeleteButton: FC = () => {
  const t = useTranslation();
  const { gameOver, handleDelete } = useInputs();

  return (
    <button
      disabled={gameOver}
      onClick={() => handleDelete()}
      className="flex flex-col justify-center items-center text-center border-2
      border-red-600 rounded text-2xl text-white font-bold p-2 bg-red-600 
      hover:bg-white hover:text-red-600 hover:border-red-600 pt-1"
    >
      {t("delete")}
    </button>
  );
};

export default DeleteButton;

import type { FC } from "react";
import { useInputs, useTranslation } from "~/hooks";

const SubmitButton: FC = () => {
  const t = useTranslation();
  const { gameOver, handleSubmit } = useInputs();

  return (
    <button
      disabled={gameOver}
      onClick={() => handleSubmit()}
      className="flex flex-col justify-center items-center text-center border-2
          border-green-600 rounded md:text-2xl text-white font-bold p-2 bg-green-600 hover:bg-white
          hover:text-green-600 hover:border-green-600 md:pt-1"
    >
      {t("submit")}
    </button>
  );
};

export default SubmitButton;

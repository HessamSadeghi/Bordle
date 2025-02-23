import type { FC } from "react";
import { useInputs, useTranslation } from "~/hooks";

const ResetButton: FC = () => {
  const t = useTranslation();
  const { handleReset } = useInputs();

  return (
    <button
      onClick={handleReset}
      className="flex flex-col justify-center items-center text-center border-2
      border-blue-600 rounded md:text-2xl text-white font-bold p-2 bg-blue-600 
      hover:bg-white hover:text-blue-600 hover:border-blue-600 pt-1"
    >
      {t("reset")}
    </button>
  );
};

export default ResetButton;

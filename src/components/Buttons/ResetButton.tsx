import type { FC } from "react";
import { ENGLISH_LETTERS, PERSIAN_LETTERS } from "~/data";
import { useGameStore, useLanguageStore, useTranslation } from "~/hooks";

const ResetButton: FC = () => {
  const t = useTranslation();
  const { language } = useLanguageStore();
  const { resetGame, setLetters } = useGameStore();

  return (
    <button
      onClick={() => {
        setLetters(language === "en" ? ENGLISH_LETTERS : PERSIAN_LETTERS);
        resetGame();
      }}
      className="flex flex-col justify-center items-center text-center border-2
      border-blue-600 rounded text-2xl text-white font-bold p-2 bg-blue-600 
      hover:bg-white hover:text-blue-600 hover:border-blue-600 pt-1"
    >
      {t("reset")}
    </button>
  );
};

export default ResetButton;

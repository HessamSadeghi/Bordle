import { type FC } from "react";
import { ENGLISH_LETTERS, PERSIAN_LETTERS } from "~/data";
import { useLanguageStore, useGameStore, useKeyboardStore } from "~/hooks";

const LanguageSwitchButton: FC = () => {
  const { resetGame } = useGameStore();
  const { setLetters } = useKeyboardStore();
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex space-x-2">
      <button
        className={`flex flex-col justify-center items-center text-center border-2 w-8 h-8 md:w-16 md:h-16
          border-blue-600 rounded md:text-2xl text-white font-bold p-2 bg-blue-600 hover:bg-white
          hover:text-blue-600 hover:border-blue-600 ${
            language === "fa" ? "pb-1" : "pt-2"
          }`}
        onClick={() => {
          setLanguage(language === "en" ? "fa" : "en");
          setLetters(language === "en" ? PERSIAN_LETTERS : ENGLISH_LETTERS);
          resetGame();
        }}
      >
        {language === "en" ? "فا" : "En"}
      </button>
    </div>
  );
};

export default LanguageSwitchButton;

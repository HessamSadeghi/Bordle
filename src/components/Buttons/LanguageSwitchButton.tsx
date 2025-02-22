import { type FC } from "react";
import { useLanguageStore, useGameStore } from "~/hooks";

const LanguageSwitchButton: FC = () => {
  const { resetGame } = useGameStore();
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex space-x-2">
      <button
        className="flex flex-col justify-center items-center text-center border-2
          border-blue-600 rounded text-2xl text-white font-bold p-2 bg-blue-600 hover:bg-white
          hover:text-blue-600 hover:border-blue-600 pt-1 w-24"
        onClick={() => {
          setLanguage(language === "en" ? "fa" : "en");
          resetGame();
        }}
      >
        {language === "en" ? "فارسی" : "English"}
      </button>
    </div>
  );
};

export default LanguageSwitchButton;

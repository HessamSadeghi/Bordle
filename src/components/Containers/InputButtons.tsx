import { useMemo, type FC } from "react";
import { useLanguageStore, useGameStore } from "~/hooks";
import { ENGLISH_LETTERS, PERSIAN_LETTERS } from "~/data";
import {
  DeleteButton,
  LanguageSwitchButton,
  LetterButton,
  ResetButton,
  SubmitButton,
} from "~/components";

const InputButtons: FC = () => {
  const { gameOver } = useGameStore();
  const { language } = useLanguageStore();

  const letters = useMemo(() => {
    return language === "en" ? ENGLISH_LETTERS : PERSIAN_LETTERS;
  }, [language]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-b-2 border-gray-200 my-1 w-full" />
      <div
        className={`grid gap-2 my-1 ${
          language === "en" ? "grid-cols-9" : "grid-cols-11"
        }`}
      >
        {letters.map((input) => (
          <LetterButton key={input} input={input} />
        ))}
        <LanguageSwitchButton />
      </div>
      <div className="flex flex-row justify-center gap-4 mb-2 mt-4">
        {gameOver ? (
          <ResetButton />
        ) : (
          <>
            <DeleteButton />
            <SubmitButton />
          </>
        )}
      </div>
    </div>
  );
};

export default InputButtons;

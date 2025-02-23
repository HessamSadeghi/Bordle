import {
  DeleteButton,
  LanguageSwitchButton,
  LetterButton,
  ResetButton,
  SubmitButton,
} from "~/components";
import { type FC } from "react";
import { useLanguageStore, useGameStore } from "~/hooks";

const InputButtons: FC = () => {
  const { language } = useLanguageStore();
  const { gameOver, letters } = useGameStore();

  if (!letters) return null;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-b-2 border-gray-200 my-1 w-full" />
      <div
        className={`grid gap-2 my-1 ${
          language === "en" ? "grid-cols-9" : "grid-cols-11"
        }`}
      >
        {letters?.map((letter) => (
          <LetterButton
            key={letter.value}
            value={letter.value}
            color={letter.color}
          />
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

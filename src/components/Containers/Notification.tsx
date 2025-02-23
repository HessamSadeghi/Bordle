import {
  useInputs,
  useGameStore,
  useTranslation,
  useNotificationStore,
} from "~/hooks";
import type { FC } from "react";

const Notification: FC = () => {
  const t = useTranslation();
  const { theWord } = useInputs();
  const { gameOver } = useGameStore();
  const { notification } = useNotificationStore();

  return (
    <p
      className={`flex flex-row justify-center text-center font-bold md:text-lg min-h-7
      ${notification.type === "error" ? "text-red-600" : "text-green-600"}`}
    >
      {notification?.message}
      {gameOver && (
        <span className="mx-2 text-gray-400">{`${t(
          "chosen_word"
        )} ${theWord}`}</span>
      )}
    </p>
  );
};

export default Notification;

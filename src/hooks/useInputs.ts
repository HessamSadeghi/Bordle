import {
  ENGLISH_LETTERS,
  ENGLISH_MAPPING,
  PERSIAN_LETTERS,
  PERSIAN_MAPPING,
} from "~/data";
import {
  useGameStore,
  useTranslation,
  useKeyboardStore,
  useLanguageStore,
  useNotificationStore,
} from "~/hooks";
import { NotificationType } from "~/models";
import { useCallback, useEffect, useMemo } from "react";

interface useInputsOutputs {
  theWord: string;
  gameOver: boolean;
  handleReset: () => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  handleClick: (input: string) => void;
}

const useInputs = (): useInputsOutputs => {
  const {
    grid,
    gameOver,
    resetGame,
    currentCell,
    setGameOver,
    setCellValue,
    setCurrentCell,
    theEnglishWord,
    thePersianhWord,
  } = useGameStore();

  const currentRow = currentCell.row;
  const currentCol = currentCell.col;

  const t = useTranslation();
  const { language } = useLanguageStore();
  const { setNotification } = useNotificationStore();
  const { setLetters, setLetterColor } = useKeyboardStore();

  const theWord = useMemo(() => {
    return language === "en" ? theEnglishWord : thePersianhWord;
  }, [language, theEnglishWord, thePersianhWord]);

  const hasWon = useCallback(() => {
    let currentScore = 0;
    grid[currentRow].forEach((element, index) => {
      let colorIndex = 0;
      if (element.value === theWord[index]) {
        colorIndex = 3;
        currentScore++;
      } else if (theWord.includes(element.value)) colorIndex = 2;
      else colorIndex = 1;

      setCellValue(currentRow, index, element.value, colorIndex);
      setLetterColor(element.value, colorIndex);
    });

    if (currentScore === 5) {
      setGameOver(true);
      setNotification("success" as NotificationType, t("message_win"));
      return true;
    }
    return false;
  }, [
    t,
    grid,
    theWord,
    currentRow,
    setGameOver,
    setCellValue,
    setLetterColor,
    setNotification,
  ]);

  const resetNotifications = useCallback(() => {
    setNotification("error" as NotificationType, "");
  }, [setNotification]);

  const handleReset = useCallback(() => {
    setLetters(language === "en" ? ENGLISH_LETTERS : PERSIAN_LETTERS);
    resetNotifications();
    setGameOver(false);
    resetGame();
  }, [language, resetGame, setLetters, resetNotifications, setGameOver]);

  const handleSubmit = useCallback(() => {
    resetNotifications();

    if (currentCol === 0) {
      setNotification(
        "error" as NotificationType,
        t("message_not_guessed_any")
      );
      return;
    }

    if (currentCol !== 5) {
      setNotification(
        "error" as NotificationType,
        t("message_not_guessed_all")
      );
      return;
    }

    if (hasWon()) return;

    if (currentRow === 4) {
      setGameOver(true);
      setNotification("error" as NotificationType, t("message_loose"));
    } else {
      setCurrentCell(currentRow + 1, 0);
    }
  }, [
    t,
    hasWon,
    currentCol,
    currentRow,
    setGameOver,
    setCurrentCell,
    setNotification,
    resetNotifications,
  ]);

  const handleDelete = useCallback(() => {
    resetNotifications();

    if (currentCol === 0) {
      setNotification("error" as NotificationType, t("message_delete"));
      return;
    }

    setCellValue(currentRow, currentCol - 1, "", 0);
    setCurrentCell(currentRow, currentCol - 1);
  }, [
    t,
    currentCol,
    currentRow,
    setCellValue,
    setCurrentCell,
    setNotification,
    resetNotifications,
  ]);

  const handleClick = useCallback(
    (input: string) => {
      resetNotifications();

      if (currentCol === 5) {
        setNotification("error" as NotificationType, t("message_guessed_all"));
        return;
      }
      setCellValue(currentRow, currentCol, input, 4);
      setCurrentCell(currentRow, currentCol + 1);
    },
    [
      t,
      currentCol,
      currentRow,
      setCellValue,
      setCurrentCell,
      setNotification,
      resetNotifications,
    ]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver) return;

      const key = event.key;

      if (/^[a-zA-Z\u0600-\u06FF]$/.test(key)) {
        let inputString = "";
        if (language === "en" && !/^[a-zA-Z]$/.test(key)) {
          inputString = ENGLISH_MAPPING[key.toLowerCase()].toUpperCase();
        } else if (language === "fa" && !/^[\u0600-\u06FF]$/.test(key)) {
          inputString = PERSIAN_MAPPING[key.toLowerCase()];
        } else {
          inputString = key.toUpperCase();
        }
        handleClick(inputString);
      } else if (key === "Enter") {
        event.preventDefault();
        handleSubmit();
      } else if (key === "Backspace" || key === "Delete") {
        handleDelete();
      } else if (
        language === "fa" &&
        (key === "[" ||
          key === "]" ||
          key === ";" ||
          key === "'" ||
          key === "," ||
          key === "\\" ||
          key === ".")
      )
        handleClick(PERSIAN_MAPPING[key]);
    },
    [gameOver, handleClick, handleSubmit, handleDelete, language]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return {
    theWord,
    gameOver,
    handleClick,
    handleReset,
    handleDelete,
    handleSubmit,
  };
};

export default useInputs;

import { useCallback, useEffect, useMemo } from "react";
import { ENGLISH_MAPPING, PERSIAN_MAPPING } from "~/data";
import { useLanguageStore, useGameStore, useTranslation } from "~/hooks";
import { NotificationType } from "~/models";

interface useInputsOutputs {
  gameOver: boolean;
  handleClick: (input: string) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
}

const useInputs = (): useInputsOutputs => {
  const {
    current,
    gameOver,
    grid,
    setCellValue,
    setCurrent,
    setGameOver,
    setNotification,
    theEnglishWord,
    thePersianhWord,
  } = useGameStore();

  const currentRow = current.row;
  const currentCol = current.col;

  const t = useTranslation();
  const { language } = useLanguageStore();

  const theWord = useMemo(() => {
    return language === "en" ? theEnglishWord : thePersianhWord;
  }, [language, theEnglishWord, thePersianhWord]);

  const processGuess = useCallback(() => {
    let currentScore = 0;
    grid[currentRow].forEach((element, index) => {
      if (element.value === theWord[index]) {
        setCellValue(currentRow, index, element.value, 3);
        currentScore++;
      } else if (theWord.includes(element.value)) {
        setCellValue(currentRow, index, element.value, 2);
      } else {
        setCellValue(currentRow, index, element.value, 1);
      }
    });

    if (currentScore === 5) {
      setGameOver(true);
      setNotification("success" as NotificationType, t("message_win"));
      return true;
    }
    return false;
  }, [grid, currentRow, theWord, setCellValue, setGameOver, setNotification]);

  const handleSubmit = useCallback(() => {
    setNotification("error" as NotificationType, "");

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

    const hasWon = processGuess();

    if (hasWon) {
      return;
    }

    if (currentRow === 4) {
      setGameOver(true);
      setNotification("error" as NotificationType, t("message_loose"));
    } else {
      setCurrent(currentRow + 1, 0);
    }
  }, [
    currentCol,
    currentRow,
    processGuess,
    setCurrent,
    setGameOver,
    setNotification,
  ]);

  const handleDelete = useCallback(() => {
    setNotification("error" as NotificationType, "");
    if (currentCol === 0) {
      setNotification("error" as NotificationType, t("message_delete"));
      return;
    }
    setCellValue(currentRow, currentCol - 1, "", 0);
    setCurrent(currentRow, currentCol - 1);
  }, [currentCol, currentRow, setCellValue, setCurrent, setNotification]);

  const handleClick = useCallback(
    (input: string) => {
      setNotification("error" as NotificationType, "");

      if (currentCol === 5) {
        setNotification("error" as NotificationType, t("message_guessed_all"));
        return;
      }
      setCellValue(currentRow, currentCol, input, 4);
      setCurrent(currentRow, currentCol + 1);
    },
    [currentCol, currentRow, setCellValue, setCurrent, setNotification]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver) return;

      const key = event.key;

      if (/^[a-zA-Z\u0600-\u06FF]$/.test(key)) {
        let inputString = "";
        if (language === "en" && /^[\u0600-\u06FF]$/.test(key)) {
          inputString = ENGLISH_MAPPING[key.toLowerCase()].toUpperCase();
        } else if (language === "fa" && /^[a-zA-Z]$/.test(key)) {
          inputString = PERSIAN_MAPPING[key.toLowerCase()];
        } else {
          inputString = key.toUpperCase();
        }
        handleClick(inputString);
      } else if (key === "Enter") {
        handleSubmit();
      } else if (key === "Backspace" || key === "Delete") {
        handleDelete();
      }
    },
    [gameOver, handleClick, handleSubmit, handleDelete]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return {
    gameOver,
    handleClick,
    handleDelete,
    handleSubmit,
  };
};

export default useInputs;

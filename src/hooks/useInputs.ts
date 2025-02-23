import { NotificationType } from "~/models";
import { useCallback, useEffect, useMemo } from "react";
import { ENGLISH_MAPPING, PERSIAN_MAPPING } from "~/data";
import { useLanguageStore, useGameStore, useTranslation } from "~/hooks";

interface useInputsOutputs {
  gameOver: boolean;
  handleClick: (input: string) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
}

const useInputs = (): useInputsOutputs => {
  const {
    grid,
    gameOver,
    currentCell,
    setGameOver,
    setCellValue,
    setCurrentCell,
    setLetterColor,
    theEnglishWord,
    setNotification,
    thePersianhWord,
  } = useGameStore();

  const currentRow = currentCell.row;
  const currentCol = currentCell.col;

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
        setLetterColor(element.value, 3);
        currentScore++;
      } else if (theWord.includes(element.value)) {
        setCellValue(currentRow, index, element.value, 2);
        setLetterColor(element.value, 2);
      } else {
        setCellValue(currentRow, index, element.value, 1);
        setLetterColor(element.value, 1);
      }
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
      setCurrentCell(currentRow + 1, 0);
    }
  }, [
    t,
    currentRow,
    currentCol,
    setGameOver,
    processGuess,
    setCurrentCell,
    setNotification,
  ]);

  const handleDelete = useCallback(() => {
    setNotification("error" as NotificationType, "");
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
  ]);

  const handleClick = useCallback(
    (input: string) => {
      setNotification("error" as NotificationType, "");

      if (currentCol === 5) {
        setNotification("error" as NotificationType, t("message_guessed_all"));
        return;
      }
      setCellValue(currentRow, currentCol, input, 4);
      setCurrentCell(currentRow, currentCol + 1);
    },
    [currentCol, currentRow, setCellValue, setCurrentCell, setNotification, t]
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
    [gameOver, handleClick, handleSubmit, handleDelete, language]
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

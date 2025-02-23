import { useCallback } from "react";
import { TRANSLATIONS } from "~/data";
import { useLanguageStore } from "~/hooks";

const useTranslation = () => {
  const { language } = useLanguageStore();

  return useCallback(
    (key: keyof (typeof TRANSLATIONS)[string]): string => {
      return TRANSLATIONS[language][key] || key;
    },
    [language]
  );
};

export default useTranslation;

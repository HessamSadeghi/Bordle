import { useCallback } from "react";
import { translations } from "~/data";
import { useLanguageStore } from "~/hooks";

const useTranslation = () => {
  const { language } = useLanguageStore();

  return useCallback(
    (key: keyof (typeof translations)[string]): string => {
      return translations[language][key] || key;
    },
    [language]
  );
};

export default useTranslation;

import { translations } from "~/data";
import { useLanguageStore } from "~/hooks";

const useTranslation = () => {
  const { language } = useLanguageStore();
  return (key: keyof (typeof translations)["en"]): string => {
    return translations[language][key] || key;
  };
};

export default useTranslation;

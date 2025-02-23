import type { FC } from "react";
import { useTranslation } from "~/hooks";

const Header: FC = () => {
  const t = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center my-1 md:my-4">
      <h1 className="mt-2 text-3xl md:text-6xl font-bold">{t("bordle")}</h1>
      <h2 className="md:mb-1 md:text-2xl">{t("bilingual_wordle")}</h2>
    </div>
  );
};

export default Header;

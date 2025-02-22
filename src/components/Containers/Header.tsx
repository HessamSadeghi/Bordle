import type { FC } from "react";
import { useTranslation } from "~/hooks";

const Header: FC = () => {
  const t = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center md:mb-4">
      <h1 className="mt-2 text-6xl font-bold">{t("bordle")}</h1>
      <h2 className="mb-1 text-2xl font-bold">{t("bilingual_wordle")}</h2>
    </div>
  );
};

export default Header;

import type { FC } from "react";
import { useLanguageStore } from "./hooks";
import { Grid, Header, InputButtons, Notification } from "~/components";

const App: FC = () => {
  const { language } = useLanguageStore();

  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="flex flex-col items-center h-screen w-full border-2 border-gray-200 rounded
      justify-start md:justify-center"
    >
      <Header />
      <Grid />
      <InputButtons />
      <Notification />
    </div>
  );
};

export default App;

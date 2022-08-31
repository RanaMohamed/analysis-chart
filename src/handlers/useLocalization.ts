import { useState } from "react";
import i18n from "@i18n/i18n";

export const useLocalization = () => {
  const [, setChanged] = useState(false);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  i18n.on("languageChanged", () => {
    setChanged((prev) => !prev);
  });

  return {
    lang: i18n.language,
    otherLang: !i18n.language.includes("ar") ? "ar" : "en",
    dir: i18n.dir(),
    isRTL: i18n.dir() === "rtl",
    changeLanguage,
  };
};

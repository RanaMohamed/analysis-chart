import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const resources = {
  en,
  ar,
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    detection: {
      order: ["querystring", "navigator"],
      lookupQuerystring: "locale",
    },
    resources,
    fallbackLng: ["en"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

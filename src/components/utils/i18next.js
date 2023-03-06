import i18n from "i18next";
import Backend from "i18next-http-backend";
import Languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ua",
    whitelist: ["ua", "ru"],
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStarage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

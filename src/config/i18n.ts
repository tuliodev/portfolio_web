import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslation from "../../public/locales/en.json";
import portugueseTranslation from "../../public/locales/pt.json";

const resources = {
  en: {
    translation: englishTranslation,
  },
  pt: {
    translation: portugueseTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18n;

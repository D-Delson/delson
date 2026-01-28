import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// languages
import ta from "./locals/ta.json";
import en from "./locals/en.json";



i18n.use(initReactI18next).init({
  resources: {
    ta: { translation: ta },
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

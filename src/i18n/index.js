import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from "./constants";
import { en, de, uk } from "./translations";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      [LOCALS.EN]: {
        translation: en,
      },
      [LOCALS.DE]: {
        translation: de,
      },
      [LOCALS.UK]: {
        translation: uk,
      }
    },
    fallbackLng: LOCALS.EN,
  });

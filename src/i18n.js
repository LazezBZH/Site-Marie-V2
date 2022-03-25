import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Title: "Marie Aballea: Sophrology and Reiki.",
          IntroTitle: "Sophrology and Reiki.",
          intro:
            "I’m qualified sophrologist and in reiki as well. I opened my first pratice in France (Brittany) but live yet in Eire (Mayo, Crossmolina).",
          enter: "Enter 🚪",
        },
      },
      fr: {
        translations: {
          Title: "Marie Aballea: Sophrologie et Reiki.",
          IntroTitle: "Sophrologie et Reiki.",
          intro:
            "Après avoir proposé durant de nombreuses années des séances de sophorlogie et Reiki en Bretagne, à Saint Méen le grand, Montauban de Bretagne et Saint Malo, je vis maintenant en Irlande mais continue cependant à accompagner mes clients en langue française via Skype.",
          enter: "Entrer 🚪",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

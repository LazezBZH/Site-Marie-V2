import { useTranslation } from "react-i18next";
import france from "../../assets/france.jpg";
import irlande from "../../assets/irlande.jpg";
import "./Boutons.css";

export default function Boutons() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="buttons">
      <button
        style={{
          fontWeight: i18n.resolvedLanguage === "fr" ? "bolder" : "normal",
          borderColor: i18n.resolvedLanguage === "fr" ? "red" : "#ffeceff1",
        }}
        onClick={() => changeLanguage("fr")}
      >
        <figure className="version-fr">
          <img src={france} alt="version française" />
          <figcaption> Site en français</figcaption>
        </figure>
      </button>
      <button
        style={{
          fontWeight: i18n.resolvedLanguage === "en" ? "bolder" : "normal",

          borderColor: i18n.resolvedLanguage === "en" ? "red" : "#ffeceff1",
        }}
        onClick={() => changeLanguage("en")}
      >
        <figure className="version-en">
          <img src={irlande} alt="english version" />
          <figcaption> Website in english</figcaption>
        </figure>
      </button>
    </div>
  );
}

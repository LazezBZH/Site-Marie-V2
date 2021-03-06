import { useTranslation } from "react-i18next";
import {
  Buttons,
  Button,
  Figure,
  Figcaption,
  France,
  Irlande,
} from "../../styles/components/buttons";

export default function Boutons() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Buttons>
      <Button
        style={{
          fontWeight: i18n.resolvedLanguage === "fr" ? "bolder" : "normal",
          borderColor: i18n.resolvedLanguage === "fr" ? "red" : "#ffeceff1",
        }}
        onClick={() => changeLanguage("fr")}
      >
        <Figure>
          <France></France>
          <Figcaption> Site en français</Figcaption>
        </Figure>
      </Button>
      <Button
        style={{
          fontWeight: i18n.resolvedLanguage === "en" ? "bolder" : "normal",

          borderColor: i18n.resolvedLanguage === "en" ? "red" : "#ffeceff1",
        }}
        onClick={() => changeLanguage("en")}
      >
        <Figure>
          <Irlande></Irlande>
          <Figcaption> Website in english</Figcaption>
        </Figure>
      </Button>
    </Buttons>
  );
}

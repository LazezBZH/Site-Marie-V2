import "./Accueil.css";
import { useTranslation } from "react-i18next";

export default function Accueil() {
  const { i18n } = useTranslation();
  return (
    <div className="accueil">
      <div className="home-main App"></div>
    </div>
  );
}

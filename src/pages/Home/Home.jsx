import "./Home.css";
import { useTranslation } from "react-i18next";

import Boutons from "../../components/Boutons/Boutons";
import Choose from "../../components/Choose/Choose";
import Intro from "../../components/Intro/Intro";

export default function Home() {
  const { i18n } = useTranslation();
  return (
    <div className="home">
      <Choose />
      <div className="home-main App">
        <Boutons />
        <Intro />
      </div>
    </div>
  );
}

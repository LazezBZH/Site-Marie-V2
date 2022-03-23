import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Intro.css";

export default function Intro() {
  const { t: translate } = useTranslation();

  return (
    <div className="intro">
      <Link to="/accueil">
        <h1>{translate("IntroTitle")}</h1>
        <p>
          <Trans i18nKey="intro">trans</Trans>
        </p>
      </Link>
    </div>
  );
}

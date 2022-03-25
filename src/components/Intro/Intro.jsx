import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { IntroSection } from "../../styles/pages/pages";
import { IntroH, IntroP, Enter } from "../../styles/components/intro";

export default function Intro() {
  const { t: translate } = useTranslation();

  return (
    <IntroSection>
      <IntroH>{translate("IntroTitle")}</IntroH>
      <IntroP>
        <Trans i18nKey="intro">trans</Trans>
      </IntroP>
      <Link to="/accueil">
        <Enter>
          <Trans i18nKey="enter">trans</Trans>
        </Enter>
      </Link>
    </IntroSection>
  );
}

import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import { Banner, Title, Logo, Subtitle } from "../../styles/components/header";

export default function Header() {
  const { t: translate } = useTranslation();
  return (
    <Banner>
      <Link to="/">
        <Logo />
      </Link>
      <Title>{translate("Title")}</Title>
      <Subtitle>
        <Trans i18nKey="subtitle">trans</Trans>
      </Subtitle>
      <Subtitle>
        <Trans i18nKey="subtitle2">trans</Trans>
      </Subtitle>
    </Banner>
  );
}

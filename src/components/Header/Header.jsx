import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Banner, Title, Logo } from "../../styles/components/header";

export default function Header() {
  const { t: translate } = useTranslation();
  return (
    <Banner>
      <Link to="/">
        <Logo />
      </Link>
      <Title>{translate("Title")}</Title>
    </Banner>
  );
}

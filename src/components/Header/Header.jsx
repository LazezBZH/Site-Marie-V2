import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo@2x.png";
import "./Header.css";

export default function Header() {
  const { t: translate } = useTranslation();
  return (
    <nav className="header-nav">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo" />
      </Link>
      <h1>{translate("Title")}</h1>
    </nav>
  );
}

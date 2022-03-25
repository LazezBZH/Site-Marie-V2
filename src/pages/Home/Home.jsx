import Boutons from "../../components/Boutons/Boutons";
import { Choose } from "../../styles/components/choose";
import Intro from "../../components/Intro/Intro";
import { HomeMain } from "../../styles/pages/pages";

export default function Home() {
  return (
    <>
      <Choose>Choisissez votre langue/choose your language</Choose>
      <HomeMain>
        <Boutons />
        <Intro />
      </HomeMain>
    </>
  );
}

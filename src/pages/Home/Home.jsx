import Boutons from "../../components/Boutons/Boutons";
import { Choose } from "../../styles/components/choose";
import Intro from "../../components/Intro/Intro";
import { Main } from "../../styles/pages/pages";

export default function Home() {
  return (
    <>
      <Choose>Choisissez votre langue / Choose your language</Choose>
      <Main>
        <Boutons />
        <Intro />
      </Main>
    </>
  );
}

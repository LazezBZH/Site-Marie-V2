import { GlobalStyle } from "./styles/bases/globalStyle";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Accueil from "./pages/Accueil/Accueil";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="accueil" element={<Accueil />} />
      </Routes>
    </>
  );
}

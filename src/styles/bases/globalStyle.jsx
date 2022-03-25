import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import fond from "../../assets/fond.png";

export const GlobalStyle = createGlobalStyle`

* {
    font-family: "Raleway", sans-serif;
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;
   
  }

body { 
    background-image: url(${fond});
    background-color:  ${colors.secondary};
     margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }

a {
    text-decoration: none;
  }




`;

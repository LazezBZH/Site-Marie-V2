import styled from "styled-components";
import colors from "../bases/colors";

import fond from "../../assets/fond.png";
import france from "../../assets/france.jpg";
import irlande from "../../assets/irlande.jpg";

export const Buttons = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  margin-top: 4rem;
`;
export const Button = styled.button`
  width: 19.5rem;
  height: 17.5rem;
  display: flex;
  justify-content: space-around;
`;
export const Figure = styled.figure`
  width: 19rem;
  margin: 0;
  -webkit-box-shadow: 3px 3px ${colors.figshadow1},
    -1em 0 0.4em ${colors.figshadow2};
  box-shadow: 3px 3px ${colors.figshadow1}, -1em 0 0.4em ${colors.figshadow2};
  background-image: url(${fond});
`;
export const Figcaption = styled.figcaption`
  background-color: ${colors.captionbg};
  border: 0.2rem solid ${colors.captionbord};
  border-radius: 0 0 2rem 2rem;
  padding: 1rem 0;
  color: ${colors.texte2};
  font-size: 1.2rem;
  width: 77%;
  margin: -2rem auto 2rem auto;
`;
export const France = styled.img.attrs({
  src: `${france}`,
})`
  width: 15rem;
  height: 10rem;
  object-fit: cover;
  margin: 2rem;
`;
export const Irlande = styled.img.attrs({
  src: `${irlande}`,
})`
  width: 15rem;
  height: 10rem;
  object-fit: cover;
  margin: 2rem;
`;

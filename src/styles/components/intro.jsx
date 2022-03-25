import styled from "styled-components";
import colors from "../bases/colors";

export const IntroH = styled.h2`
  text-align: left;
  font-size: 2rem;
  font-weight: bolder;
`;
export const IntroP = styled.p`
  text-align: justify;
  font-size: 1.1rem;
`;
export const Enter = styled.button`
  color: ${colors.h1txt};
  background-color: ${colors.captionbg};
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 2rem;
  left: 35%;
  font-size: 1.2rem;
  font-weight: bolder;
`;

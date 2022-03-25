import styled, { keyframes } from "styled-components";

import colors from "../bases/colors";

const defilant = keyframes`
  0% {
    transform: translate3d(38%, 0, 0); /* position initiale à droite */
  }

  50% {
    transform: translate3d(-25%, 0, 0); /* position finale à gauche */
  }
   100% {
    transform: translate3d(38%, 0, 0); /* position finale à gauche */
  }
`;

export const Choose = styled.div`
  font-size: 1.7rem;
  font-weight: bolder;
  width: 100%;
  color: rgb(115, 115, 145);
  text-shadow: 1px 1px 2px ${colors.txtshadow1}, 0 0 1em ${colors.txtshadow2},
    0 0 0.2em ${colors.txtshadow3};
  margin-left: 28%;
  margin-top: 2rem;
  animation-name: ${defilant};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  overflow: hidden;
`;

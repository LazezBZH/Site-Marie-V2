import styled from "styled-components";
import colors from "../bases/colors";

export const IntroSection = styled.div`
  width: 35%;
  height: 22rem;
  margin-top: 2rem;
  background-color: ${colors.introbg};
  border-radius: 2rem;
  padding: 1.5rem;
  color: ${colors.introtxt};
  position: relative;
`;
export const HomeMain = styled.div`
  max-width: 1500px;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

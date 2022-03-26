import styled from "styled-components";
import colors from "../bases/colors";

import header2 from "../../assets/header2.jpg";
import logo from "../../assets/logo@2x.png";

export const Banner = styled.div`
  background-image: url(${header2});
  background-size: 100%;
  padding: 0.5rem 0 2.5rem 0.2rem;
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 25rem;
  background-color: ${colors.imgbg};
  margin-left: 2rem;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 ${colors.txtshadow1},
    -1px 1px 0 ${colors.txtshadow2}, 1px 1px 0 #fff,
    1px 1px 10px ${colors.txtshadow3};
  color: ${colors.h1txt};
  background-color: ${colors.h1bg};
  text-align: center;
  margin: 2rem auto 0 auto;
`;
export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 ${colors.txtshadow1},
    -1px 1px 0 ${colors.txtshadow2}, 1px 1px 0 #fff,
    1px 1px 10px ${colors.txtshadow3};
  color: ${colors.h1txt};
  background-color: ${colors.h1bg};
  text-align: center;
  margin: 0 auto;
`;

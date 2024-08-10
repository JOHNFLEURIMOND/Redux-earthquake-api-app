import styled from "styled-components";
import { colors, media } from "../layout/theme.jsx";

export const MainHero = styled.div`
  width: 100%;
  height: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  font-size: 20px;
  background-color: ${colors.white};
  padding: 20px;
`;

export const LeftHalf = styled.div`
  width: 50%;
  display: flex;
  padding: 35px;
`;

export const RightHalf = styled.div`
  width: 50%;
  display: inline-block;
`;

export const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 1.4em;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`;

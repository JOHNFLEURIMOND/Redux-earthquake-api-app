//components/Quakes/index.jsximport styled from 'styled-components';
import { colors } from "../layout/theme";
import styled from "styled-components";

// Styled components with optimized CSS for performance and responsiveness
export const EarthquakeContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  margin: 0;
  padding: 2em;
  line-height: normal;
  background-color: ${colors.white};

  @media (max-width: 800px) {
    padding: 1.5em;
    grid-gap: 10px;
  }
`;

export const CardDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  height: auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 1em auto;
  color: ${colors.primaryText};

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

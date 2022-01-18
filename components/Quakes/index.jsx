import React from 'react';
import { GlobalStyle, Container } from '../layout/global-style';
import styled from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';

export const ExperienceContainer = styled.div`
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
background-color: ${fleurimondColors.white};

@media (max-width: 800px){
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 2em;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
}`;

export const CardDiv = styled.div`
display: grid;
justify-items: center;
align-items: center;
grid-gap: 1rem;
width: 100%;
height: 100%;

@media (max-width: 800px){
  display: grid;
  grid-template-columns:  1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
}
`
export const Title = styled.h1`
font-size: 3rem;
text-align: center;
grid-column: span 3;
margin: 1em auto;
@media (max-width: 600px) {
  font-size: 1rem;
  text-align: center;
}
`
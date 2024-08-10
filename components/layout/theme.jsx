// components/theme.jsx
import { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const colors = {
  darkBrown: "#493d3f",
  mutedBrown: "#726862",
  deepBlue: "#465462",
  richBrown: "#463027",
  softOrange: "#d18165",
  darkRed: "#1e1814",
  black: "#000000",
  graySmoke: "#b7c2d0",
  smoke: "#5f6b78",
  lightSmoke: "#dae0e5",
  white: "#ffffff",
  haitianGold: "#d4af37",
  me: "#4c3e10",
  trueBlack: "#000000",
  woooRed: "#ff0000",
  fierceFuchsia: "#d92b85",
  roboticRed: "#d92b85",
  orneryOrange: "#fd7333",
  tipOffTangerine: "#f19425",
  sassySaffron: "#fbb627",
  leapingLemon: "#ffcc33",
  livingLime: "#c9da2c",
  giganticGreen: "#8dbd3e",
  bebeBlue: "#94ceda",
  steelTeal: "#00a0ac",
  jocelyneTeal: "#389583",
  palesasAqua: "#5bdc94",
  lightAqua: "#8de4af",
  blue: "#0aa2dc",
  dutchieBlue: "#4c9be2",
  irateIris: "#4500bc",
  galacticGrape: "#8800b8",
  sharkBlack: "#242626",
  deepCerulean: "#007da3",
  cerulean: "#00b3e6",
  foam: "#f7fcfe",
  chenin: "#e2e367",
  buttons: {
    blue: "#1b4677",
    darkBlue: "#0d223b",
    lightBlue: "#c6d1dd",
    lightFuschia: "#dac5d0",
  },
  modals: {
    innerBorders: "#e5e5e5",
    text: "#333333",
  },
  button: {
    primary: {
      backgroundColor: "#007bff",
      color: "#ffffff",
    },
  },
};

export { colors, media };

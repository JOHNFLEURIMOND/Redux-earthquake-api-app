// components/layout/global-style.jsx
import { createGlobalStyle } from "styled-components";
import { colors, media } from "./theme.jsx"; // Ensure correct import path

const GlobalStyle = createGlobalStyle`
  :root {
    --font-body: 'Montserrat', sans-serif;
    --font-heading: 'Montserrat', sans-serif;
    --font-size-base: 62.5%;
    --font-size-lg: 3.8rem;
    --font-size-md: 2.8rem;
    --font-size-sm: 1.6rem;
    --font-size-xs: 1.4rem;
    --font-weight-heading: 700;
    --font-weight-subheading: 400;
    --font-weight-body: 400;
    --color-background: ${colors.background};
    --color-primary-text: ${colors.primaryText};
    --color-accent: ${colors.accent};
    --color-border: ${colors.border};
    --color-button-primary-bg: ${colors.button.primary.backgroundColor};
    --color-button-primary-text: ${colors.button.primary.color};
    --color-shadow: ${colors.shadow};
    --scrollbar-width: 1.5rem;
    --color-dark-brown: ${colors.darkBrown};
    --color-muted-brown: ${colors.mutedBrown};
    --color-deep-blue: ${colors.deepBlue};
    --color-rich-brown: ${colors.richBrown};
    --color-soft-orange: ${colors.softOrange};
    --color-dark-red: ${colors.darkRed};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-body);
  }

  html {
    font-size: var(--font-size-base);
    overflow-x: hidden;
    font-family: var(--font-body);
  }

  body {
    background-color: var(--color-background);
    color: var(--color-primary-text);
    overflow-x: hidden;
    scrollbar-color: var(--color-accent) var(--color-background);
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  body::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 9px;
    background-clip: content-box;
  }

  h1, h2, h3 {
    color: var(--color-primary-text);
    font-family: var(--font-heading);
  }

  h1 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-heading);
  }

  h2 {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-subheading);
    text-align: center;
  }

  h3 {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-body);
  }

  p {
    color: var(--color-primary-text);
    opacity: 0.8;
    font-size: var(--font-size-xs);
    line-height: 1.6;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-accent);
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${colors.darkBrown};
  }

  li {
    list-style: none;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 4rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }

  .common-heading {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-transform: capitalize;
  }

  input, textarea {
    max-width: 50rem;
    color: var(--color-primary-text);
    padding: 1.4rem 2.2rem;
    border: 1px solid var(--color-border);
    text-transform: uppercase;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 2rem;
    background-color: var(--color-button-primary-bg);
    color: var(--color-button-primary-text);
    padding: 1.4rem 2.2rem;
    border: 1px solid var(--color-button-primary-bg);
    text-transform: uppercase;
    font-size: var(--font-size-sm);
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  input[type="submit"]:hover {
    background-color: ${colors.darkBrown};
  }

  @media (max-width: ${media.tablet}) {
    .container {
      padding: 0 1.6rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${media.phone}) {
    html {
      font-size: 50%;
    }

    .grid {
      gap: 2rem;
    }

    .grid-two-column, .grid-three-column, .grid-four-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyle;

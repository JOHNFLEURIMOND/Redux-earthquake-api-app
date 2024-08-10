import styled from "styled-components";
import { colors } from "../layout/theme.jsx";

// Footer Container
export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  background: linear-gradient(
    90deg,
    ${colors.woooRed} 0%,
    ${colors.orneryOrange} 27%,
    ${colors.leapingLemon} 85%
  );
  padding: 20px;
`;

// Footer Container with alignment
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

// Footer Logo
export const FooterLogo = styled.a`
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.5s ease;

  &:hover,
  &:active,
  &:focus {
    border-color: ${colors.white};
    color: ${colors.white};
    transform: scale(1.08);
  }
`;

// Menu Icon
export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;

// Menu
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  margin: 2%;
  list-style: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

// Menu Item
export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

// Menu Link
export const MenuLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.palesasAqua};
    transform: translateY(-3rem);
  }

  &:active {
    transform: translateY(3rem);
    color: ${colors.palesasAqua};
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
  }
`;

// Menu Item Button
export const MenuItemBtn = styled.li`
  list-style: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

// Menu Link Button
export const MenuLinkBtn = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

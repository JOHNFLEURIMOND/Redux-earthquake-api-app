import React from 'react';
import { GlobalStyle, Container } from '../layout/global-style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fleurimondColors } from '../../utils/theme.js';

export const Footer = styled.footer` 
width: 100%;
height: 10vh;
box-sizing: border-box;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
font-size: 20px;
background: linear-gradient(90deg, ${fleurimondColors.woooRed} 0%, ${fleurimondColors.orneryOrange}  27%, ${fleurimondColors.leapingLemon}  85%);
padding: 20px;
`;

export const FooterContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
`;

export const FooterLogo = styled(Link)`
color: ${fleurimondColors.white};
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover,&:active,&:focus{
    border-color: ${fleurimondColors.white};
    color: ${fleurimondColors.white};
    transform: scale(1.08);
}
`;



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

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;
width: 100vw;
flex-direction: row;
justify-content: space-around;
margin: 2%;
listStyle: none;
@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;
@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;
&:hover {
    color: ${fleurimondColors.palesasAqua};
    transform: traslateY(-3rem);
}
&:active {
    transform: traslateY(3rem);
    color: ${fleurimondColors.palesasAqua};
}
@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
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
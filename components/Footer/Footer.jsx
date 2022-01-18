import React, { useState } from 'react';
import moment from 'moment';
import {
  Footer,
  FooterLogo,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuIcon,
  MenuLinkBtn
} from './index';

const JFFooter = (props) => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon. 
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <Footer {...props}>
      <FooterLogo to="/">
        <MenuIcon />
        Fleurimond
      </FooterLogo>

      <Menu onClick={handleClick} click={click}>
        <MenuItem>
          <MenuLink onClick={handleClick} to="/">{moment().format('llll')}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={handleClick} to="https://twitter.com/TCODEMONGER">Twitter</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={handleClick} to="https://github.com/JOHNFLEURIMOND">Github</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={handleClick} to="https://www.linkedin.com/in/john-fleurimond">LinkedIn</MenuLink>
        </MenuItem>
      </Menu>
    </Footer>
  );
};

export default JFFooter

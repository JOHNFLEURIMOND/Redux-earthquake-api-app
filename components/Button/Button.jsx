import React from "react";
import PropTypes from "prop-types";
import { Button as StyledButton } from "./index";

const Button = React.memo(({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

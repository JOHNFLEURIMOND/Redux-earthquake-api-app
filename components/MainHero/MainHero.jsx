import React from "react";
import PropTypes from "prop-types"; // Import PropTypes if you plan to use it
import { MainHero, Title } from "./index";

const JFMainHero = ({ ...props }) => {
  return (
    <MainHero {...props}>
      <Title>Fleurimond Earthquake App</Title>
    </MainHero>
  );
};

// Optional: Define PropTypes if needed
JFMainHero.propTypes = {
  // Define the expected props and their types here
};

export default JFMainHero;

import React from "react";
import GlobalStyle from "./layout/global-style"; // Ensure this path is correct
import Nav from "./Navbar/Nav.jsx"; // Ensure this path is correct
import Footer from "./Footer/Footer.jsx"; // Ensure this path is correct
import MainHero from "./MainHero/MainHero.jsx"; // Ensure this path is correct
import Quakes from "./Quakes/Quakes.jsx"; // Ensure this path is correct
import { EarthquakeProvider } from "./Quakes/EarthquakeContext"; // Ensure this path is correct

const Homepage = React.memo(() => (
  <div>
    <Nav />
    <MainHero />
    <Quakes />
    <Footer />
  </div>
));

const App = () => (
  <>
    <GlobalStyle />
    <EarthquakeProvider>
      <Homepage />
    </EarthquakeProvider>
  </>
);

export default App;

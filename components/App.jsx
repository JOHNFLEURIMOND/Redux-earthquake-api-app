import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Footer from '../components/Footer/Footer';
import MainHero from '../components/MainHero/MainHero';
import Quakes from './Quakes/Quakes.jsx';
import {
  Link, Route, BrowserRouter as Router, Switch
} from 'react-router-dom';
import store from "./store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { GlobalStyle, Container } from '../components/layout/global-style';

const Homepage = (props) => {

  return (
    <div>
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Nav />
        <MainHero />
        <Quakes />
        <Footer />
      </Container>
    </Provider>
    </div>

  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </Router>
);

export default App;

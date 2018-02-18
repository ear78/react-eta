import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import './Css/Reset.css';
import './Layout.css';

import bgImage from './Images/isola1.jpg';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Layout;

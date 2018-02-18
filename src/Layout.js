import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import './Css/Reset.css';
import './Layout.css';

import bgImage from './Images/isola1.jpg';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Layout;

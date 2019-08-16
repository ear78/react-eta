import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';
import Login from './Views/Login/Login';
import Packages from './Views/Packages/Packages';
import Package from './Views/Packages/Package/Package';
import Signup from './Views/Signup/Signup';
import './Layout.css';
import packagesData from './Data/PackagesData';
import bgImage from './Images/isola1.jpg';

class Layout extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
  render() {
    return (
      <div className="Layout">
        <Header />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/packages" component={Packages} data={packagesData}/>
            <Route path="/package/:id" exact component={Package} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Layout;

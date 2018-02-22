import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Packages from './Pages/Packages/Packages';
import Package from './Pages/Packages/Package/Package';
import './Layout.css';
import packagesData from './Data/PackagesData';
import bgImage from './Images/isola1.jpg';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/packages" component={Packages} data={packagesData}/>
            <Route path="/package/:id" exact component={Package} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Layout;

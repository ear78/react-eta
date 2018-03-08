import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Sidemenu from '../Sidemenu/Sidemenu';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: 'mobile-menu',
            isToggle: false
        }
    }

    handleClickOpenMenu = () => {
        this.setState(prev => ({
            isToggle: !prev.isToggle
        }))
    }

    hideMenu = () => {
        this.setState(prev => ({
            isToggle: !prev.isToggle
        }))
    }

  render() {
    return (
      <header className="Header">
        <div onClick={this.handleClickOpenMenu} className="Hambuger-container">
            <i className="material-icons">menu</i>
        </div>
        <div>
            <Link to="/login"><button>Login</button></Link>
        </div>

        <Sidemenu 
        toggle={this.state.isToggle}
        click={this.hideMenu}
        />
      </header>
    );
  }
}

export default Header;

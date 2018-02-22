import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

// import MobileMenuComponent from "../mobilemenu/MobileMenuComponent.js";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: 'mobile-menu'
        }
    }

    handleClickOpenMenu(){
        this.setState({
            showMenu: 'mobile-menu active'
        })
    }

    hideMenu(){
        this.setState({
            showMenu: 'mobile-menu'
        })
    }

  render() {
    return (
      <header className="Header">
        <div onClick={this.handleClickOpenMenu.bind(this)} className="hambuger-container">
            <i className="material-icons">menu</i>
        </div>
        <div>
            <Link to="/login"><button>Login</button></Link>
        </div>


        {/*<MobileMenuComponent showMenu={this.state.showMenu} hideMenu={this.hideMenu.bind(this)}/>*/}
      </header>
    );
  }
}

export default Header;

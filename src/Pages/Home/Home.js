import React from "react";
import { Link } from 'react-router-dom';

import './Home.css';
import etalogo from '../../Images/etalogo.svg';
import SignupButton from '../../Components/SignupButton/SignupButton';

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <h1>Explore The Air</h1>
                <h5>One Adventure At A Time</h5>
                <img src={etalogo} alt="eta logo"/>
                <SignupButton />
            </section>
        )
    }
}

export default Home;

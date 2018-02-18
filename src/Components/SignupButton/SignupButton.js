import React from "react";
import { Link } from "react-router-dom";

import "./SignupButton.css";

const signupButton = (props) => {
        return (
            <Link to="Login" className="Signup-button"><button>Sign Up</button></Link>
        )
}

export default signupButton;

import React from "react";
import { Link } from "react-router-dom";

import "./SignupButton.css";

const signupButton = (props) => {
        return (
            <Link to="Signup" className="Signup-button">
                <button>
                    Sign Up&nbsp;&nbsp;
                    <i className="fa fa-plane" aria-hidden="true"></i>
                </button>
            </Link>
        )
}

export default signupButton;

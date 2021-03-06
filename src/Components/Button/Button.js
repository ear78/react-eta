import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = (props) => {
    return (
        <button 
            style={{
                backgroundColor: props.backgroundColor,
                color: props.color}} 
                className="Button">
            {props.btnName}&nbsp;&nbsp;
            <i className="fa fa-podcast" aria-hidden="true"></i>
        </button>
    )
}

export default button;

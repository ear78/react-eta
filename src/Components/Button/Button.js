import React from 'react';

import './Button.css';

const button = (props) => {
    return (
        <button className="Button">
            {props.btnName}&nbsp;&nbsp;
            <i className="fa fa-plane" aria-hidden="true"></i>
    </button>
    )
}

export default button;

import React from 'react';

import { Link } from 'react-router-dom';

const menuItem = (props) => {
    return (
        <li>
            <Link to={props.label}>{props.label}</Link>
        </li>
    )
}

export default menuItem;
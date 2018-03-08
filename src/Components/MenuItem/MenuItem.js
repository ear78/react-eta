import React from 'react';

import { Link } from 'react-router-dom';
import './MenuItem.css';

const menuItem = (props) => {
    return (
        <li className="Menu-item">
            <Link to={props.path}>{props.label}</Link>
        </li>
    )
}

export default menuItem;
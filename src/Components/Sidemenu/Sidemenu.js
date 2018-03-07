import React from 'react';

import './Sidemenu.css';

const sideMenu = (props) => {
    return (
        <div className={props.toggle ? 'Sidemenu slideIn' : 'Sidemenu slideOut'}>
            Hello!
            <span onClick={props.click}>X</span>
        </div>
    )
}

export default sideMenu;
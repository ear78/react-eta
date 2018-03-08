import React from 'react';

import './Sidemenu.css';
import MenuItem from '../MenuItem/MenuItem';

const sideMenu = (props) => {
    return (
        <div className={props.toggle ? 'Sidemenu slideIn' : 'Sidemenu slideOut'}>
            <span className="Close" onClick={props.click}>X</span>
            <ul>
                <MenuItem label={'Home'}/>
                <MenuItem label={'Login'}/>
                <MenuItem label={'Signup'}/>
                <MenuItem label={'Packages'}/>
            </ul>
        </div>
    )
}

export default sideMenu;
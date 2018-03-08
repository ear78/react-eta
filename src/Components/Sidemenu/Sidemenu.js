import React from 'react';

import './Sidemenu.css';
import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';

const sideMenu = (props) => {
    return (
        <div className={props.toggle ? 'Sidemenu slideIn' : 'Sidemenu slideOut'}>
            <span className="Close" onClick={props.click}>X</span>
            <ul>
                <MenuItem path={'/'} label={'Home'}/>
                <MenuItem path={'login'} label={'Login'}/>
                <MenuItem path={'signup'} label={'Signup'}/>
                <MenuItem path={'packages'} label={'Packages'}/>
            </ul>
            <Button 
                btnName={'Login'} 
                backgroundColor={'#fff'}
                color={'#000'}/>
        </div>
    )
}

export default sideMenu;
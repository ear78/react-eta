import React from 'react';

import './Sidemenu.css';
import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';

const sideMenu = (props) => {
    return (
        <div className={props.toggle ? 'Sidemenu slideIn' : 'Sidemenu slideOut'}>
            <span className="Close" onClick={props.click}>
                <i className="fa fa-bullseye" aria-hidden="true"></i>
            </span>
            <ul>
                <MenuItem 
                    clicked={props.click} path={'/'} 
                    label={'Home'}/>
                <MenuItem 
                    clicked={props.click} path={'about'} label={'About'}/>
                <MenuItem 
                    clicked={props.click} path={'signup'} label={'Signup'}/>
                <MenuItem 
                    clicked={props.click} path={'packages'} label={'Packages'}/>
            </ul>
            <Button 
                btnName={'Login'} 
                backgroundColor={'#fff'}
                color={'#000'}/>
        </div>
    )
}

export default sideMenu;
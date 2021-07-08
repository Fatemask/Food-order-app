import React from 'react';
import mealimg from '../../../assests/img/m6.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = props =>{
    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>React meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealimg} alt="buffet img" />
            </div>
        </React.Fragment>
    );
}

export default Header;

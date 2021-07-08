import React from 'react';
import classes from '../HeaderCartButton/HeaderCartButton.module.css';
import CartIcon from '../../../Cart/CartIcaon';

const HeaderCartButton =(props)=> {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <sapn>Your Cart</sapn>
            <span className={classes.badge}>3</span>
        </button>
    );
};
export default HeaderCartButton;

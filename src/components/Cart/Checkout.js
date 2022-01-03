import  {React ,useEffect, useRef, useState} from 'react';
import classes from './Checkout.module.css';
import { useEffect } from 'react';

const Checkout=(props)=> {
    const [formInputValidity , setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const postalCodeRef = useRef();
    const cityInputRef = useRef();

    const isEmpty =(value)=>{
        value.trim() === "";
    }

    const isNotFiveChar = (value)=>{
        value.trim().length != 5;
    }

    const confirmHandler=(event)=>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPostalCode = postalCodeRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = !isNotFiveChar(enteredPostalCode);
        
        const isFormValid = enteredAddressIsValid && enteredCityIsValid && enteredNameIsValid && enteredPostalCodeIsValid;

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredAddressIsValid,
            postalCode:enteredPostalCodeIsValid,
            city:enteredCityIsValid
        })

        if(!isFormValid){
            return;
        }

    }

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? "" : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" ref={nameInputRef}/>
                {!formInputValidity.name && <p>Please Enter Valid Name!!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="address">Address</label>
                <input id="address" type="text" ref={addressInputRef}/>
                {!formInputValidity.street && <p>Please Enter Valid Address!!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal</label>
                <input id="postal" type="text" ref={postalCodeRef}/>
                {!formInputValidity.postalCode && <p>Please Enter Valid Postal Code!!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please Enter Valid City!!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
             </div>
        </form>
    )
}

export default Checkout

import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../Store/Cart.context";

const HeaderCartButton = (props) => {
   
   const cardCtx= useContext(CartContext)
   const numberofCartitems = cardCtx.items.reduce( (currentNumber, item)=> { // reduce is used because for every kind of meal we stored the amount of meals of that type is part of the cart
    return currentNumber + item.amount // reduce is a method that allows us to transform an array of data into a single value
   } , 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofCartitems}</span>
        </button>
    );
};

export default HeaderCartButton;
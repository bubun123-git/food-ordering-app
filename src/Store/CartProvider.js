import CartContext from "./Cart.context";

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => { }
    const removeItemFromHandler = (items) => { }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};
export default CartProvider;
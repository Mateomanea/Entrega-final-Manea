import React from "react";

const CartWidget = ({ cartCount }) => {
    return (
        <>
            <i className="cart bi bi-bag">
                {
                    cartCount > 0 && 
                    <span className='navbar__link--cartCount'>
                        { cartCount }
                    </span>
                }
            </i>
        </>
    )
}

export default CartWidget;
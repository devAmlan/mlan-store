import React, { useContext, useState } from 'react'
import "../../pages/cartpage/Cart.css"
import { CartContext } from "../../context/CartContext"
import { WishlistContext } from "../../context/WishlistContext"
function CartProduct({ quantity, productid, productname, productimage, productprice, originalprice, producttag, productrating }) {
    const { dispatch, removeFromcart } = useContext(CartContext)
    const { movetoWishlist } = useContext(WishlistContext)
    const cartproduct = { productid, productname, productimage, productprice, originalprice, producttag, productrating }
    const [itemqty, setItemqty] = useState(quantity)
    if (itemqty <= 0) {
        dispatch({ type: "REMOVE_FROM_CART", payload: cartproduct })
    }
    const increaseItem = () => {
        setItemqty(prev => prev + 1)
        dispatch({ type: "INCREASE_QUANTITY", payload: cartproduct })
    }
    const decreaseItem = () => {
        setItemqty(prev => prev - 1)
        dispatch({ type: "DECREASE_QUANTITY", payload: cartproduct })
    }
    return (
        <>
            <div className="cart_products">
                <div className="added_product">
                    <div className="added_product_image">
                        <img src={productimage} alt={productname} />
                    </div>
                    <div className="added_product_details">
                        <div className="product_name">
                            <h3>{productname}</h3>
                        </div>
                        <div className="price">
                            <h5>₹ {itemqty * productprice}</h5>
                            <h5><s>₹ {itemqty * originalprice}</s></h5>
                        </div>
                        <div className="action_btns">
                            <button onClick={decreaseItem}>-</button>
                            <p>{itemqty}</p>
                            <button onClick={increaseItem}>+</button>
                        </div>
                        <div className="buy_btn">
                            <button
                                onClick={() => { removeFromcart(cartproduct) }}>
                                REMOVE FROM CART</button>
                            <button onClick={() => { movetoWishlist(cartproduct) }}>MOVE TO WISHLIST</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct
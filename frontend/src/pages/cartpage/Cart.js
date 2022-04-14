import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartProduct from '../../components/cartproduct/CartProduct'
function Cart() {
    const { state: { cartProducts } } = useContext(CartContext)
    let productprice = 0, offerprice = 0, discount = 0, productquantity = 0;

    if (cartProducts.length > 0) {
        for (let index = 0; index < cartProducts.length; index++) {
            productquantity = Number(cartProducts[index].quantity);
            const originalprice = Number(cartProducts[index].originalprice)
            const itemprice = Number(cartProducts[index].productprice)
            productprice += productquantity * originalprice;
            offerprice += productquantity * itemprice
            discount = productprice - offerprice
        }

    }

    return (
        <>
            {cartProducts.length === 0
                ? <div className='no_item_alert'>
                    <h2>No Items in the cart</h2>
                    <Link to="/product"><button>SHOP NOW</button></Link>
                </div>
                :
                <div className="cartpage">
                    <h2>MY CART ({cartProducts.length})</h2>

                    <p>{cartProducts[0].qty}</p>
                    {
                        cartProducts.map((product) => {
                            return (
                                <CartProduct
                                    quantity={product.quantity}
                                    productid={product.productid}
                                    productname={product.productname}
                                    productimage={product.productimage}
                                    productprice={product.productprice}
                                    originalprice={product.originalprice}
                                />)
                        })
                    }
                    <div className="total_amount">
                        <div className="order_details">
                            <h3>Price details</h3>
                            <hr />
                            <p>Price - ₹{productprice}</p>
                            <p>Discount - ₹ {discount}</p>
                            <p>Delivery charges - ₹ 40</p>
                            <hr />
                            <h3>Total amount - ₹ {offerprice}</h3>
                        </div>
                        <button>PLACE ORDER</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart
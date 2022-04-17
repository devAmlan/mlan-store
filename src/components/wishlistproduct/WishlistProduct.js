import React, { useContext } from 'react'
import { AiFillStar } from "react-icons/ai"
import { WishlistContext } from "../../context/WishlistContext"

function WishlistProduct({ productid, productname, productimage, productprice, originalprice, producttag, productrating }) {
    const product = { productid, productname, productimage, productprice, originalprice, producttag, productrating }
    const { addtocartFromwishlist } = useContext(WishlistContext)
    return (
        <>
            <img src={productimage} alt="" className="product_image" />
            <div className="product_name">
                <h3>{productname}</h3>
            </div>
            <div className="price">
                <h5>&#8377; {productprice}</h5>
                <h5><s>&#8377; {originalprice}</s></h5>
            </div>
            <div className="ratings">
                <div className="ratingbox">
                    <h3>{productrating} <AiFillStar /></h3>
                </div>
            </div>
            <div className="add_cart_btn">
                <button onClick={() => { addtocartFromwishlist(product) }}>ADD TO CART</button>
            </div>
        </>
    )
}

export default WishlistProduct
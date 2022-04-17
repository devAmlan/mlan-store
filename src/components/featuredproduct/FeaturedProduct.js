import React from 'react'
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
function FeaturedProduct({ name, price, image, originalprice, productrating }) {
  return (
    <>
      <div className="product">
        <img src={image} alt="" class="product_image" />
        <div className="addwishlist">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="product_name">
          <h3>{name}</h3>
        </div>
        <div className="price">
          <h5>&#8377; {price}</h5>
          <h5><s>&#8377; {originalprice}</s></h5>
        </div>
        <div className="ratings">
          <div className="ratingbox">
            <h3>{productrating} <AiFillStar /></h3>
          </div>
        </div>
        <Link to="/product">
          <div className="buy_btn">
            <button>KNOW MORE</button>
          </div>
        </Link>
      </div>
    </>
  )
}

export default FeaturedProduct
import React from 'react'
function FeaturedProduct({name,price,image,originalprice}) {
  return (
    <>
    <div className="product">
    <img src={image} alt="" class="product_image"/>  
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
    <div className="buy_btn">
    <button>ADD TO CART</button>
    </div>
    </div>
    </>
  )
}

export default FeaturedProduct
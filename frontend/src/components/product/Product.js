import React, { useState } from 'react'
import "./Product.css"
import { AiFillHeart, AiOutlineHeart,AiFillStar } from "react-icons/ai"
function Product({ productname, productimage, productprice, originalprice, producttag, productrating }) {
  const [addwishlist, setAddwishlist] = useState(false)
  return (
    <>
      <div className='product'>

        {(producttag !== "") ?
          <>
            <div className="product_badge">
              <p>{producttag}</p>
            </div>
          </>
          : <></>
        }
        <div className="addwishlist">
          {(addwishlist)?
          <>
          <AiFillHeart className='fill_heart'
          onClick={()=>{setAddwishlist(!addwishlist)}}
          />
          </>
          :<>
          <AiOutlineHeart className='fill_heart' 
          onClick={()=>{setAddwishlist(!addwishlist)}}/> 
          </>
          }
         
        </div>
        <img src={productimage} alt={productimage} className="product_image" />
        <div className="product_name">
          <h3>{productname}</h3>
        </div>
        <div className="price">
          <h5>&#8377; {productprice}</h5>
          <h5><s>&#8377; {originalprice}</s></h5>
        </div>
        <div className="ratings">
        <div className="ratingbox">
        <h3>{productrating} <AiFillStar/></h3>
        </div>
        </div>
        <div className="buy_btn">
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  )
}

export default Product
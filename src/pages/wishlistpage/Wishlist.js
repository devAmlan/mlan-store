import React, { useContext } from 'react'
import "./Wishlist.css"
import { WishlistContext } from "../../context/WishlistContext"
import WishlistProduct from '../../components/wishlistproduct/WishlistProduct'
import {Link} from "react-router-dom"
function Wishlist() {
  const { wishlistproducts } = useContext(WishlistContext)

  return (
    <>
      {
        wishlistproducts.length === 0 ?
          <>
            <div className='no_item_alert'>
              <h2>No Items in the Wishlist</h2>
              <Link to="/product"><button>SHOP NOW</button></Link>
            </div>
          </>
          :
          <div className="wishlist_products">
            {
              wishlistproducts.map((product) => {
                return (
                  <div className="wishlist_product" key={product.productid}>
                    <WishlistProduct
                      productid={product.productid}
                      productname={product.productname}
                      productimage={product.productimage}
                      productprice={product.productprice}
                      originalprice={product.originalprice}
                      productrating={product.productrating}
                    />
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}

export default Wishlist
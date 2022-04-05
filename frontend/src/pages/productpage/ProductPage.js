import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
import {FilterContext} from "../../context/Filtercontext"
import { ProductContext } from '../../context/ProductContext'
import {filterbyPrice,filterbyRatings,filterbyCategory} from "../../utils/index"
function ProductPage() {
 
  const {state:{sortBy,rating,category}} = useContext(FilterContext)
  const {state:{productDb,error}} = useContext(ProductContext)
  const data  = [...productDb]

  
  const pricesortedProducts = filterbyPrice(data,sortBy)
  const ratingsortedProducts = filterbyRatings(pricesortedProducts,rating)
  const categorysortedProducts = filterbyCategory(ratingsortedProducts,category)
  return (
    <>
      <div className='product-page'>
        <Filter />
        {(error !== "") ?
          <p>{error}</p>
          
          : <div className="all_products">
            {
             categorysortedProducts.map((each) => {

                return (
                  <>
                    <div key={each.id}>
                      <Product
                        productid={each.id}
                        productimage={each.productimage}
                        productname={each.productname}
                        productprice={each.productprice}
                        originalprice={each.originalprice}
                        producttag={each.tag}
                        productrating={each.rating}
                      />
                    </div>
                  </>
                )

              })
            }
          </div>}
      </div>
    </>
  )
}

export default ProductPage
import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import Filter from '../../components/filter/Filter'
import {FilterContext} from "../../context/Filtercontext"
function ProductPage() {
  const {state} = useContext(FilterContext)
  return (
    <>
    <div className='product-page'>
      <Filter/>
      <div className="all_products">
        {
          state.productDb.map((each) => {
           
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
      </div>
      </div>
    </>
  )
}

export default ProductPage
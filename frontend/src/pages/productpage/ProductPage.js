import React from 'react'
import { Productdb } from '../../api/db/Productdb'
import Product from '../../components/product/Product'
function ProductPage() {

  return (
    <>
      <div className="all_products">
        {
          Productdb.map((each) => {
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
    </>
  )
}

export default ProductPage
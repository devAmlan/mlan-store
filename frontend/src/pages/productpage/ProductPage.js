import React, { useState } from 'react'
import { Productdb } from '../../api/db/Productdb'
import Product from '../../components/product/Product'
function ProductPage() {
  const [products] = useState(Productdb)
  return (
    <>
      <div className="all_products">
        {
          products.map((each) => {
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
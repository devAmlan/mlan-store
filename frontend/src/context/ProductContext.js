import React, { createContext, useEffect, useReducer } from "react"
import axios from "axios"
import {ProductReducer} from "../reducer/ProductReducer"
const ProductContext = createContext(null)

function ProductProvider({ children }) {

    const [state, dispatch] = useReducer(ProductReducer, { productDb:[],error:"" })
    useEffect(() => {
       
        (async () => {
            try {
                const response = await axios.get('api/products');
                if(response.status === 200){
                    dispatch({type:"PRODUCTS",payload:response.data.products})
                }
            } catch (error) {
                 dispatch({type:"ERROR",payload:error})
            }
        })()
    }, [])
    return (
        <>
            <ProductContext.Provider value={{state,dispatch}}>
            {children}
            </ProductContext.Provider>
        </>
    )
}

export { ProductContext,ProductProvider }
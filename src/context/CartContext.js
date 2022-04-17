import React, { createContext, useReducer } from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toast"
import { cartReducer } from "../reducer/CartReducer"
const CartContext = createContext(null)
function CartProvider({ children }) {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(cartReducer, { cartProducts: [] })

  const addTocart = async (product) => {
    const existProduct = state.cartProducts.find((item) => {
      return item.productid === product.productid
    })
    if (existProduct === undefined) {
      if (localStorage.getItem("authtoken")) {
        dispatch({ type: "ADD_TO_CART", payload: product })
        toast.success('Product added to cart successfully')
      }
      else {
        navigate('/login')
      }
    }
    else {
      navigate('/cart')
    }
  }
  const removeFromcart = async (product) => {
    if (localStorage.getItem("authtoken")) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product })
    }
    else {
      navigate('/login')
    }
  }

  return (
    <CartContext.Provider value={{ state, dispatch, addTocart, removeFromcart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider } 
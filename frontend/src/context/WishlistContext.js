import React, { createContext, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"
const WishlistContext = createContext(null)

function WishlistProvider({ children }) {
    const { dispatch } = useContext(CartContext)
    const navigate = useNavigate()
    const [wishlistproducts, setWishlistproducts] = useState([])
    const addtoWishlist = async (product) => {
        if (localStorage.getItem("authtoken")) {
            setWishlistproducts([...wishlistproducts, product])
        } else {
            navigate('/login')
        }
    }
    const removefromWishlist = product => {
        setWishlistproducts(wishlistproducts.filter(item => item.productid !== product.productid))

    }
    const addtocartFromwishlist = async (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
        setWishlistproducts(wishlistproducts.filter(item => item.productid !== product.productid))

    }
    const movetoWishlist = async (product) => {
        setWishlistproducts([...wishlistproducts, product])
        dispatch({ type: "REMOVE_FROM_CART", payload: product })
    }
    return (
        <WishlistContext.Provider value={{ addtoWishlist, removefromWishlist, wishlistproducts, movetoWishlist, addtocartFromwishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, WishlistContext }
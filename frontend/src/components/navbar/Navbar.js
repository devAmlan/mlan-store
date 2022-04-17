import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import { WishlistContext } from "../../context/WishlistContext"
function Navbar() {
    const { authuserdata } = useContext(AuthContext)
    const { state: { cartProducts } } = useContext(CartContext)
    const { wishlistproducts } = useContext(WishlistContext)
    return (
        <>
            <div className="header">
                <div className="logo">Mlan store</div>
                <input className="searchbar"
                    placeholder="Search" />
                <nav className="header_nav">
                    <ul>
                        {(authuserdata.email !== undefined) ?
                            <div className='loggedinuser'>👋 {authuserdata.firstName}</div>
                            : <><Link to="/login"><button className="login_nav">Log in</button></Link></>}
                        <Link to="/wishlist">
                            <li className="wishlist_nav">
                                <i className="fa-solid fa-heart"></i>
                                <div className="badge">{wishlistproducts.length}</div>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="cart_nav">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className="badge">{cartProducts.length}</div>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
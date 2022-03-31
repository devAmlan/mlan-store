import React,{useContext} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import {AuthContext} from "../../context/AuthContext"
function Navbar() {
    const {authuserdata} = useContext(AuthContext)
    return (
        <>
            <div className="header">
                <div className="logo">Mlan store</div>
                <input className="searchbar"
                    placeholder="Search" />
                <nav className="header_nav">
                    <ul>
                        {(authuserdata.email !== undefined)?
                        <div className='loggedinuser'>👋 {authuserdata.firstName}</div>
                        :<><Link to="/login"><button className="login_nav">Log in</button></Link></>}
                        <Link to="/wishlist">
                            <li className="wishlist_nav">
                                <i className="fa-solid fa-heart"></i>
                                <div className="badge">2</div>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="cart_nav">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className="badge">1</div>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
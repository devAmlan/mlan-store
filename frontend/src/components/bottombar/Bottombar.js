import React from 'react'
import "./Bottombar.css"
import { Link } from "react-router-dom"
function Bottombar() {
    return (
        <>
            <div className="bottom-bar">
                <Link to="/">
                    <div className="menu">
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/product">
                    <div className="menu">
                        <i className="fa-solid fa-store"></i>
                        <p>Shop</p>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="menu">
                        <i className="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Bottombar
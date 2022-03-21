import React from 'react'
import "./Bottombar.css"
import { Link } from "react-router-dom"
function Bottombar() {
    return (
        <>
            <div class="bottom-bar">
                <Link to="/">
                    <div class="menu">
                        <i class="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/product">
                    <div class="menu">
                        <i class="fa-solid fa-store"></i>
                        <p>Shop</p>
                    </div>
                </Link>
                <Link to="/profile">
                    <div class="menu">
                        <i class="fa-solid fa-user"></i>
                        <p>Profile</p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Bottombar
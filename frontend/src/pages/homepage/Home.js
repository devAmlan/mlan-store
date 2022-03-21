import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import Footer from '../../components/footer/Footer'
import {Featuredproductdb} from "../../api/db/Featuredproductdb"
import FeaturedProduct from '../../components/featuredproduct/FeaturedProduct'
import bannerimage  from "../../assets/img/banner.png"
import keyboard from "../../assets/img/keyboard.jpg"
import keyswitch from "../../assets/img/switch.jpg"
function Home() {
  return (
   <>
    <div className="banner">
    <div className="banner_text">
    <h1>shop cool & sexy mechanical keyboards</h1>
    <p>We believe typing should be a joy,which is why we are on a mission to make the best keyboards in the world.</p>
    <Link to="/product">
    <button className="banner_button">SHOP NOW</button>
    </Link>
    </div>
    <div className="banner_image">
    <img src={bannerimage} alt=""/>
    </div>
    </div>

    <h3 className="category_heading">CATEGORIES</h3>
    <div className="category">
        <div className="product_cateogory">
        <img src={keyboard} alt=""/>
        <h3>MECHANICAL KEYBOARDS</h3>
        <button>EXPLORE CATEGORY</button>
        </div>
        <div className="product_cateogory">
        <img src={keyswitch} alt=""/>
        <h3>SWITCHES & ACCESSORIES</h3>
        <button>EXPLORE CATEGORY</button>
        </div>
    </div>

    <div className="featured_collection">
    <h2 className="heading">FEATURED PRODUCTS</h2>
    <div className="featured_products">
    { 
      Featuredproductdb.map((item)=>{
          return(
          <>
          <FeaturedProduct 
           image={item.productimage}
           name={item.productname}
           price={item.productprice}
           originalprice={item.originalprice}
          />
          </>)
      })
    }
    </div>

    </div>
    <div className="view_all">
    <Link to="/product">
    <button>VIEW ALL PRODUCTS</button>
    </Link>
    </div>
    <Footer/>
   </>
  )
}

export default Home
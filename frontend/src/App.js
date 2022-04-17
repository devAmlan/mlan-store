import './App.css';
import ProductPage from './pages/productpage/ProductPage';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Home';
import Signup from './pages/signup/Signup';
import Bottombar from './components/bottombar/Bottombar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FilterProvider } from "./context/Filtercontext"
import { AuthProvider } from "./context/AuthContext"
import Login from './pages/login/Login';
import Cart from './pages/cartpage/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <FilterProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/cart' element={<Cart />} />
                </Routes>
                <Bottombar />
              </FilterProvider>
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import ProductPage from './pages/productpage/ProductPage';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Home';
import Signup from './pages/signup/Signup';
import Bottombar from './components/bottombar/Bottombar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {FilterProvider} from "./context/Filtercontext"
import {AuthProvider} from "./context/AuthContext"
import Login from './pages/login/Login';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <AuthProvider>
    <FilterProvider>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    <Bottombar/>
    </FilterProvider>
    </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;

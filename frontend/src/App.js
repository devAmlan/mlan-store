import './App.css';
import ProductPage from './pages/productpage/ProductPage';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Home';
import Bottombar from './components/bottombar/Bottombar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    </Routes>
    <Bottombar/>
    </BrowserRouter>
    </div>
  );
}

export default App;

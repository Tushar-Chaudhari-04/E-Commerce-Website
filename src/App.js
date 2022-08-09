import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList'
import SpecificProduct from './pages/SpecificProduct.jsx'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Payment from './pages/Payment.jsx'
import Success from './pages/Success.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const App = () => {
  const user=true;
  return (
    <Router>
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/register" element={user?<Navigate to="/"/>:<Register/>}/> 
            <Route path="/login" element={user?<Navigate to="/"/>:<Login/>}/>
            <Route path="/products/:category" element={<ProductList/>}/>
            <Route path="/product/:id" element={<SpecificProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/success" element={<Success/>}/>
     </Routes>
    </Router>
  )
}

export default App
import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList'
import SpecificProduct from './pages/SpecificProduct.jsx'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Register/>
      <Login/>
      <Home/> 
      <ProductList/>
      <SpecificProduct/>
      <Cart/>
    </div>
  )
}

export default App
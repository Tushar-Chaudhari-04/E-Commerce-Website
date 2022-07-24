import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList'
import SpecificProduct from './pages/SpecificProduct.jsx'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Register/>
      <Login/>
      <Home/> 
      <ProductList/>
      <SpecificProduct/>
    </div>
  )
}

export default App
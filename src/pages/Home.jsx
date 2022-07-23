import React from 'react'
import Announcments from '../components/Announcments'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const home = () => {
  return (
    <div>
        <Announcments/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>

  )
}

export default home
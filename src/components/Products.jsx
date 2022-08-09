import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'   

const Container=styled.div`
    display:flex;
    ${'' /* flex:1;
    align-items:center; */}
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
`
const Image=styled.img`
  height:80%;
  width:80%;
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  console.log(cat,filters,sort);
  useEffect(()=>{
    const getProducts=async ()=>{
      try{  
        const res=await axios.get(cat?`http://localhost:3000/shopify/products?category=${cat}`
                                      :"http://localhost:3000/shopify/products");
        setProducts(res.data);
        
      }catch(e){
        console.log(e)
      }  
    }
    getProducts();
  },[cat]);

  console.log("products "+products);
  console.log(filteredProducts);
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(items=>
        Object.entries(filters).every(([key,value])=>
          items[key].includes(value)
        )
      )
    );
  },[products,cat,filters]);
  return (
    <Container>
    {filteredProducts.map(item=>(
        <Product elem={item} key={item.id}/>
    )
    )}
    </Container>
  )
}

export default Products
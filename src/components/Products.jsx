import React from 'react'
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

const Products = () => {
  return (
    <Container>
    {popularProducts.map(item=>(
        <Product elem={item} key={item.id}/>
    )
    )}
    </Container>
  )
}

export default Products
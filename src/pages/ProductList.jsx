import React from 'react'
import styled from 'styled-components'
import Announcments from '../components/Announcments'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container=styled.div``

const Title=styled.h1``

const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;

`
const Filter=styled.div`
    margin:20px;
`

const FilterText=styled.span`
    font-size:20px;
    font-weight:700;
    margin-right:20px;
`

const Select=styled.select`
    padding:10px;
    margin-right:20px;
`
const Option=styled.option`

`

const Product_List = () => {
  return (
    <Container>
        <Announcments/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>Orange</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (des)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product_List
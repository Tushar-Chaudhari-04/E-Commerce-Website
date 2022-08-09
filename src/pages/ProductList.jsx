import React, { useState } from 'react'
import styled from 'styled-components'
import Announcments from '../components/Announcments'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

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
    const location=useLocation();
    const cat=location.pathname.split("/")[2];
    const [filters,setFilter]=useState({});
    const [sort,setSort]=useState("Newest");

 const handleFilter=(elem)=>{
    const value=elem.target.value;
    const name=elem.target.name;
    setFilter({
        ...filters,
        [elem.target.name]:value
    });
 }  
 console.log(filters,sort);
  return (
    <Container>
        <Announcments/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilter}>
                    <Option disabled>Color</Option>
                    <Option>Marron</Option>
                    <Option>Brown</Option>
                    <Option>Gray</Option>
                    <Option>Orange</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handleFilter}>
                    <Option disabled>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select onChange={e => {setSort(e.target.value)}}>
                    <Option name="new">Newest</Option>
                    <Option name="asc">Price (asc)</Option>
                    <Option name="desc">Price (des)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product_List
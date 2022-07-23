import { ShoppingCartOutlined } from '@material-ui/icons'
import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`              /* Styled Components give specific styles to html comp :- npm i styled-components */
    height:60px;
`
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;                     /*To make all in one row*/
    justify-content:space-between;  
    align-items:center;        
`

const Left=styled.div`
    flex:1;                           /* To divide data equally */
    display:flex;
    align-items:center;
`

const Langauge=styled.span`
    font-size:14px;
    cursor:pointer;
`
const SearchContainer=styled.div`
  border:0.5px solid lightgray;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input=styled.input`
  border:none;
`
const Logo=styled.h1`
  font-weight:bold;
`

const Center=styled.div`
    flex:1;
    text-align:center;
`
const Right=styled.div`
    flex:1;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:flex-end;
`

const MenuItem=styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>

          <Left>
            <Langauge>
              EN
            </Langauge>  
            <SearchContainer>
              <Input/>
              <Search style={{color:"grey",fontSize:16}}/>
            </SearchContainer>
            </Left>  

          <Center>
            <Logo>Myntra...</Logo>
          </Center>

          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

const Container=styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
`
const Image=styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const Info=styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  ${'' /* background-color:yellow; */}
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
const Title=styled.h1`
  color:white;
  margin-bottom:20px;
`

const Button=styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  font-size:18px;
  font-weight:600;
  cursor:pointer;
`

export const CategoryItem = ({item}) => {
  return (
    <Container>
       <Link to={`/products/${item.cat}`}>
        <Image src={item.img} key={item.id}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem;
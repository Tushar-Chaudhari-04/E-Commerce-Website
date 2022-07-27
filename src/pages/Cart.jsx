import React from 'react'
import styled from 'styled-components'
import Announcments from '../components/Announcments'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container=styled.div`
  
`

const Wrapper=styled.div`
    padding:20px;
`

const Title=styled.h1`
    font-weight:300;
    text-align:center;
`
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type==="filled" && "none"};
    background-color:${props=>props.type==="filled"?"black":"transparent"};
    color:${props=>props.type==="filled" && "white"};
`

const TopTexts=styled.div``

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom=styled.div`
  display:flex;
  justify-content:space-between;
`

const Info=styled.h1`
  flex:3;
`
const Product=styled.div`
  display:flex;
  justify-content:space-between;
`;
const ProductDetail=styled.div`
  flex:2;
  display:flex;
`;
const Image=styled.img`
  width:200px;
`;
const Details=styled.div`
  display:flex;
  flex-direction:column;
  font-size:20px;
  padding:20px;
  justify-content:space-around;
  font-weight:400;
`;
const ProductName=styled.span``;

const ProductId=styled.span``;

const ProductColor=styled.div`
  display:flex;
  flex-direction:none;
  align-items:space-between;
  width:20px;
  height:20px;
  border:1px solid;
  border-radius:50%;
  background-color:${props=>props.colorType};
  margin:3px 3px;
`;

const ProductSize=styled.span``;

const PriceDetail=styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const ProductAmountContainer=styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
`;

const ProductAmount=styled.div`
  font-size:25px;
  margin:5px;
`;

const ProductPrice=styled.div`
  font-size:30px;
  font-weight:200
`;

const Hr=styled.hr`
  border:none;
  background-color:#eee;
  height:1px;
`

const Summary=styled.div`
  flex:1;
  border:2px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
  margin-top:20px;
`
const SummaryTitle=styled.h1`
  font-weight:300;
`
const SummaryItem=styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between;
  font-weight:${props=>props.type==="total" && "700"};
  font-size:${props=>props.type==="total" && "25px"};
`
const SummaryItemText=styled.span`
  ${'' /* margin-left:15px; */}
`
const SummaryItemPrice=styled.span`
  
`
const Button=styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
  font-weight:600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcments/>
      <Navbar/>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
        <TopButton>Continue Shopping</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist(0)</TopText>
        </TopTexts>
        <TopButton type="filled">CheckOut Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <Details>
                  <ProductName><b>Product:</b> Campus Thunder Shoes</ProductName>
                  <ProductId><b>Id:</b> 65478941211</ProductId>
                  <ProductColor colorType="black"/>
                  <ProductSize><b>Size:</b> UK 10</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>1</ProductAmount>  
                  <RemoveIcon/>
                </ProductAmountContainer> 
                <ProductPrice>200 $</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr/>
            
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                <Details>
                  <ProductName><b>Product:</b>Zara T-Shirts</ProductName>
                  <ProductId><b>Id:</b> 266541215312</ProductId>
                  <ProductColor colorType="gray"/>
                  <ProductSize><b>Size:</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>  
                  <RemoveIcon/>
                </ProductAmountContainer> 
                <ProductPrice>100 $</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal:</SummaryItemText>
              <SummaryItemPrice>300 $</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>5 $</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>-5 $</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>300 $</SummaryItemPrice>
            </SummaryItem>

            <Button>CheckOut Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>  
  )
}

export default Cart
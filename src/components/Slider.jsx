import React from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Pic from '../Images/maleblue.PNG';

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    ${'' /* background-color:coral; */}
    position:relative;
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${(props) => props.direction===`left` && `10px`};
    right:${(props) => props.direction===`right` && `10px`}
    margin:auto;
    cursor:pointer;
    opacity:0.5;
`
const Wrapper=styled.div`
  height:80%;
  display:flex;
`
const Slide=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
`
const ImagContainer=styled.div`
  flex:1;
`
const Image=styled.img`
  height:100%;
  width:100%;
  background-color:"fcf1ed";
  margin-left:50px;
  ${'' /* margin-top:1px;
  margin-bott:50px; */}
`

const InfoContainer=styled.div`
   flex:1;
   padding:50px;
`
const Title=styled.h1`
  font-size:70px;
`
const Desc=styled.p`
  margin :50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button=styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
          {/* <ArrowLeftOutlinedIcon /> */}
        </Arrow>
        <Wrapper>
        {sliderItems.map(item =>
          <Slide bg={item.bg} key={item.id}> 
            <ImagContainer>
              <Image src={item.img} key={item.id}/>
            </ImagContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        )}
        </Wrapper>
        <Arrow direction="right">
          {/* <ArrowRightOutlinedIcon  /> */}
        </Arrow>
    </Container>
  )
}

export default Slider
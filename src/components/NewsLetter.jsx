import React from 'react'
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';

const Container=styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const Title=styled.h1`
    font-size:70px;
    margin:20px;
`;

const Description=styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`;

const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
`;

const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;

const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;

const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get timely update from your favourite products..</Description>
        <InputContainer>
            <Input placeholder="Your Mail"/>
            <Button>
             <SendIcon></SendIcon>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
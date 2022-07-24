import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;    
`;

const Wrapper=styled.div`
    width:25%;
    padding:20px;
    background-color:white;
`;
const Title=styled.h1`
    font-size:24px;
    font-weight:300;
`;
const Form=styled.form`
   display:flex;
   flex-direction:column;
`;
const Input=styled.input`
    ${'' /* flex:1; */}
    display:flex;
    ${'' /* flex-direction:column; */}
    min-width:30%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;

const Button=styled.button`
    width:30%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;   
    align-items:center;
    justify-content:center;
    margin:20px 120px;
`;

const Link=styled.a`
  margin:5px 0px;
  font-size:16px;
  text-decoration:underline;
  cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>Sign Up</Title>
            <Form>
                <Input placeholder='UserName'/>
                <Input placeholder='Password'/>
                <Button>Login</Button>
                <Link>Forget Password?</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;
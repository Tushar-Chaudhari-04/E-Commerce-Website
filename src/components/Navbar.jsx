import React from 'react'
import styled from 'styled-components'

const Container =styled.div`              /* Styled Components give specific styles to html comp :- npm i styled-components */
    height:60px;
`
const Wrapper=styled.div`
    padding:10px 20px
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>Hi I am Navbar</Wrapper>
    </Container>
  )
}

export default Navbar
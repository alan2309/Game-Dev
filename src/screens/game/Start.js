import React from 'react'
import styled from 'styled-components'
import Bg from './image 1.png'
import Aunt from './image 2.png'
import Boy from './image_2-removebg-preview 1.svg'
const BackgroundImg = styled.img`
height: 100vh;
width:100vw;
position:absolute;
${'' /* width: 80vw;
          position: absolute;
          bottom: 0;
          zIndex: -100; */}
`
const MomImg = styled.img`
zIndex: 2;
position:absolute;
height:80vh;
right: 0%;
margin-top:9.8%

`
const Diag = styled.div`
position: absolute;
width: 60%;
height: 193.44px;
left: 22%;
top: 64.78px;
border:1px solid black;
background-color:white;
color:black;
border-radius: 5px 5px 5px 5px;`
const Container = styled.div``
const BoyImg = styled.img`
zIndex: 2;
position:absolute;
height:80vh;
left: 0%;
margin-top:9.8%
`
const Desc = styled.h1`
margin:20px 20px`
const Arrows = styled.p`
font-weight:1000;
margin:5px`
const Nexts = styled.button`
border:2px solid black;
border-radius:50%;
background-color:yellow;
cursor:pointer;
position: relative;
  float: right;
&:hover{
  background-color:#2ece34;

};
margin:3% 20% 0% 0%;
padding:5px`

const Start = () => {
  return (
    <Container>
      <BackgroundImg src={Bg} />
      <Diag>
        <Desc>
          Hi Abhay, here’s a list of groceries. Please bring all these items
          from the market.
        </Desc>
        <Nexts>
          <Arrows>→</Arrows>
        </Nexts>
      </Diag>
      <MomImg src={Aunt} />
      <BoyImg src={Boy} />
    </Container>
  )
}

export default Start
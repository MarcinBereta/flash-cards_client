import React from 'react'
import styled from 'styled-components';

const SectionCardDiv = styled.div`
background-color:rgba(196, 196, 196, 0.1);
width:20vw;
height:48vh;
border:2px solid red;
margin:10px;
border-radius: 10px;
float:left;
`
const Title = styled.h3`
color:#FFD600;
text-align:center;
font-size: 25px;
line-height: 35px;
`

const Section_Card = ({text}) => {
    return(
    <SectionCardDiv>
        <Title>{text}</Title>
    </SectionCardDiv>
    )
}

export default Section_Card
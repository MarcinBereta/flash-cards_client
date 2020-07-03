import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
/* margin-top:30vh; */
min-width:4vw;
max-width:6vw;
padding:0;
width:auto;
height: 80px;
background-color:${props => props.last ? 'black' : 'white'};
border-radius: 20px;
margin-top: ${props => props.last ? '20px' : '60px'};
margin-left:3vw;
/* margin-bottom: ${props => props.last ? '-20px' : '10px'}; */
`

const Square = ({which}) => (
    console.log(which),
    <Base which/>
) 

export default Square
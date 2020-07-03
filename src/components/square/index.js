import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
/* margin-top:30vh; */
min-width:6vw;
max-width:7vw;
padding:0;
width:auto;
height: 80px;
background-color:white;
border-radius: 20px;
margin-top: ${props => props.last ? '30vh' : '5vh'};
margin-left:2.5vw;
&:hover{
    background-color:grey
}
/* margin-bottom: ${props => props.last ? '-20px' : '10px'}; */
`

const Square = ({last}) => (
    <Base last={last} />
) 

export default Square
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
/* margin-top:30vh; */
box-sizing: border-box;
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
    background-color:grey;
    border: 1px solid red
}
/* margin-bottom: ${props => props.last ? '-20px' : '10px'}; */
`

const Square_Component = ({last, children}) => (
    <Base last={last}>
        {children}
    </Base>
) 

export default Square_Component
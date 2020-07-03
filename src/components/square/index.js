import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
/* margin-top:30vh; */
width: 80px;
height: 80px;
background: #FFFFFF;
border-radius: 20px;
margin-top: ${props => props.second ? '' : '20px'};
/* margin-bottom: ${props => props.last ? '-20px' : '10px'}; */
margin-left:7vw
`

const Square = ({props}) => (
    <Base props/>
) 

export default Square
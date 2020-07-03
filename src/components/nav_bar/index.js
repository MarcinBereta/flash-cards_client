import React from 'react';
import styled from 'styled-components';
import Square from '../../components/square/index'
const Vertical_bar = styled.ul`
position:center;
justify-content:center;
height:100vh;
width:12vw;
float:left;
border:0.2 solid black;
background-color:#FFD600;
margin:0;
padding:0;
display:block
`;

const NavBar = () => (
    <Vertical_bar>
      <Square />
      <Square which='second' />
      <Square />
      <Square which='last' />
    </Vertical_bar>
)

export default NavBar
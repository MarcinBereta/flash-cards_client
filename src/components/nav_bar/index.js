import React from 'react';
import styled from 'styled-components';
import Square from '../../components/square/index'
import { NavLink } from 'react-router-dom'
import { Home } from '@styled-icons/fa-solid/Home'

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

const HomeIcon = styled(Home)`
  z-index:3;
  position:absolute;
  width:68px;
  height:68px;
  color: red;
`

const NavBar = () => (
    <Vertical_bar>
      <nav>
        <NavLink to='/learn'>
          <Square />
        </NavLink>
        <NavLink to='/option'>
          <Square />
        </NavLink>
        <HomeIcon />
        <NavLink to='profile'>
          <Square />
        </NavLink>
        <NavLink to='/home'>
          <Square last />
        </NavLink>
      </nav>
    </Vertical_bar>
)

export default NavBar
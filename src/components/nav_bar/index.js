import React from 'react';
import styled from 'styled-components';
import Square from '../../components/square/index'
import { NavLink } from 'react-router-dom'
import { Home } from '@styled-icons/fa-solid/Home'
import { Person } from '@styled-icons/ionicons-solid/Person'
import { Settings } from '@styled-icons/ionicons-sharp/Settings'
import { Code } from '@styled-icons/heroicons-outline/Code'

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
height:100%;
color:#343434;
width:100%;
`
const PersonIcon = styled(Person)`
height:100%;
color:#343434;
width:100%;
`
const SettingsIcon = styled(Settings)`
height:100%;
color:#343434;
width:100%;
`
const CodeIcon = styled(Code)`
height:100%;
color:#343434;
width:100%
`

const NavBar = () => (
    <Vertical_bar>
      <nav>
        <NavLink to='/learn'>
          <Square >
            <CodeIcon />
          </Square>
        </NavLink>

        <NavLink to='/option'>
          <Square>
            <SettingsIcon />
          </Square>
        </NavLink>

        <NavLink to='profile'>
          <Square >
            <PersonIcon />
          </Square>
        </NavLink>

        <NavLink to='/'>
          <Square last>
            <HomeIcon />
          </Square>
        </NavLink>

      </nav>
    </Vertical_bar>
)

export default NavBar
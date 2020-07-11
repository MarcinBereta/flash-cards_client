import React from 'react';
import styled from 'styled-components'
import Background from '../../components/background/'
import NavBar from '../../components/nav_bar/'
import Button from '../../components/button/'
import { Person } from '@styled-icons/ionicons-solid/Person'


const PersonIcon = styled(Person)`
height:10vh;
color:#343434;
`

const ProfilePhoto = styled.div`
background-color:white;
width:7.5vw;
height:10vh;
margin:auto;
border-radius: 20px;

`


const profileView = () => {
    return (
    <Background width="100%">
      <NavBar />
      <h2>to jest profileView</h2>
      <ProfilePhoto >
            <PersonIcon />
      </ProfilePhoto>
      <Button text={'hello world'}/>
    </Background>
    )
}

export default profileView;
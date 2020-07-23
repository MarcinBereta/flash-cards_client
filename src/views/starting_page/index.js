import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/button/'
import Background from '../../components/background/' 



const InputGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
margin: 0 auto;
margin-top: 3vh;
width: 90%;
`

const StartingView = (props) =>{
    const[state, setState] = useState({
        registerView: false,
        loginView: false
    })
    const changeUrlToLoginView = event =>{
        event.preventDefault();
        setState({
            ...state,
            registerView:true
        })
    }
    return(
        <Background width='100%'>
            <InputGroup>
                <NavLink to='/login' ><Button text={'login'}/></NavLink>
            </InputGroup>
            <InputGroup>
                <NavLink to='/register' ><Button text={'register'}/></NavLink>
            </InputGroup>
        </Background>
    )
}
export default StartingView
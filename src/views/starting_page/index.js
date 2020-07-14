import React, {useState} from 'react';
import Button from '../../components/button/'
import { NavLink } from 'react-router-dom'

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
        <>
        <NavLink to='/login' ><Button text={'login'}/></NavLink>
        <NavLink to='/register' ><Button text={'register'}/></NavLink>
        </>
    )
}
export default StartingView
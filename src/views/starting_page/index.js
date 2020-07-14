import React, {useState} from 'react';
import Button from '../../components/button/'

const StartingView = (props) =>{
    const[state, setState] = useState({
        registerView: false,
        loginView: false
    })
    const changeUrlToLoginView = (event) =>{
        setState({
            ...state,
            registerView:true
        })
    }
    return(
        <>
        <Button text={'login'} onClick={changeUrlToLoginView()} />
        {
            state.registerView = 'true' ? props.history.push('/register') : console.log('nie przelącza')
        }
        <Button text={'register'} ></Button>

        </>
    )
}
export default StartingView
import React, {useState} from 'react'
import styled from 'styled-components'
import Background from '../../components/background'
import Form from '../../components/form/'
import Input from '../../components/input/'
import Button from '../../components/button/'

const Label = styled.label`
  display: inline-block;
  width: 50%;
  text-align: end;
  color:white;
  font-size:30px;
  justify-content:center;
  margin-right: 2vw;
`
const AlertDiv = styled.div`
width:15vw;
height:5vh;
color:red;
text-align:center;
font-weight:bold;
font-size:30px;
`

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


const RegisterView = (props) =>{

    const[state, setState] = useState({
        username:"",
        password:"",
        reppassword:""
    })

    const [alert, setAlert] = useState("")

    // const redirect = path =>{
    //     props.history.push(path)
    // }


    const handleSubmit = event =>{
        event.preventDefault()

        if(
            state.username.trim() === ""
            || state.password.trim() === ""
            || state.reppassword.trim() === ""
        ){
            setAlert("Please add all data!!!")
            return
        }

        if(state.password !== state.reppassword){
            setAlert("Hasła nie są zgodne!")
            return
        }

        fetch("http://127.0.0.1:3001/users/register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.username.trim(),
                password: state.password.trim()
            })
        })
            .then(res =>{
                if(res.ok){
                    return res.json()
                }else{
                    setAlert("Błąd serwera!")
                }
            })
            .then(data =>{
                if(!data.succes){
                    setAlert(data.message)
                }else{
                    setAlert("")
                    props.history.push("/")
                }
            })

    }
    const handleChange = event =>{
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return(
        <Background width="100%">

        {/* state.redirect == true ?
            <Redirect
            to={{
                pathname: "/",
                state: {name: "łukasz"}
            }}
            />
            : null */}

            <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Label>name</Label><Input type="text" name="username" onChange={handleChange} value={state.username} placeholder='name'/>
            </InputGroup>
            <InputGroup>
                <Label>password</Label><Input type="password" name="password" onChange={handleChange} value={state.password} placeholder='password'/>
            </InputGroup>
            <InputGroup>
                <Label>retype password</Label><Input type="password" name="reppassword"  onChange={handleChange} value={state.reppassword} placeholder='retype password'/>
            </InputGroup>
                
                <Button text={'Register'} />
                {
                    alert !== ""?
                    <AlertDiv>
                        {alert}
                    </AlertDiv>
                    :
                    null
                }
            </Form>
        </Background>
    )
}

export default RegisterView
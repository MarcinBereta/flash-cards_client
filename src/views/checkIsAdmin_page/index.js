import React, { useState } from 'react'
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

const AdminView = () => {
    const[state, setState] = useState({
        username:"",
        password:"",
    })

    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    return(
        <Background width='100%'>
            <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Label>name</Label><Input type="text" name="username" onChange={handleChange} value={state.username} placeholder='name'/>
            </InputGroup>
            <InputGroup>
                <Label>password</Label><Input type="password" name="password" onChange={handleChange} value={state.password} placeholder='password'/>
            </InputGroup>
            <Button text={'Login to admin panel'} />
            </Form>
        </Background>
    )
}

export default AdminView
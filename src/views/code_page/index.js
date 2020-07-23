import React, { useState } from 'react'
import styled from 'styled-components'
import Background from '../../components/background'
import Form from '../../components/form/'
import Input from '../../components/input/'
import Button from '../../components/button/'

const AlertDiv = styled.div`
width:15vw;
height:5vh;
color:red;
text-align:center;
font-weight:bold;
font-size:30px;
`

const CodeView = (props) => {

    const [state, setState] = useState({
        code: ''
    })

    const [alert, setAlert] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if (
            state.code.trim() === ''
        ) {
            setAlert("Please add all data!!!")
            return
        }

        fetch("http://127.0.0.1:3001/users/code", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: state.code.trim(),
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    setAlert("Błąd serwera!")
                }
            })
            .then(data => {
                console.log(data)
                if (!data.succes) {
                    setAlert(data.message)
                } else {
                    setAlert("")
                    props.history.push("/")
                }
            })
    }
    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    return (
        <Background width="100%">
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="code" onChange={handleChange} value={state.code} placeholder='code' />
                <Button text={'Send code'} />
            </Form>
            {
                alert !== "" ?
                    <AlertDiv>
                        {alert}
                    </AlertDiv>
                    :
                    null
            }
        </Background>
    )
}

export default CodeView
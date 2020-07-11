import React, {useState} from 'react'
import styled from 'styled-components'
import Background from '../../components/background'

const Form = styled.form `
display: flex;
flex-direction: column;
/* justify-content: space-between; */
align-items: center;
justify-content:center;
height:50vh;
width:40vw;
border:4px solid #FFD600;
border-radius:15px;
margin:auto;
margin-top:20vh;
/* padding: 20px; */
box-sizing: border-box;
`
const Input = styled.input`
width:50%;
height:30px;
background-color:black;
box-shadow: 9px 11px 19px -5px rgba(0,0,0,0.78);
color:white;
&:hover{
    border:2px solid #FFD600;
    border-radius:10px
}
&:focus{
    outline: none;
    border:2px solid #FFD600;
    border-radius:10px
}
`
const Button = styled.button`
width:180px;
height:50px;
top: 50%;
left: 50%;
border:4px solid #FFD600;
font-size: 2rem;
line-height: 41px;
border-radius:15px;
margin-top:4vh;
&:hover{
cursor:pointer;
border:4px solid #FFFFFF;
background-color:#FFD600;
}
`
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
                
                <Button>Register</Button>
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
import React from 'react'
import styled from 'styled-components'
import Input from '../input/'

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

const Form_Component = ({children,...props}) => {
    return(
        <Form {...props}>{children}</Form>
    )
}

export default Form_Component
import React from 'react'
import styled from 'styled-components'


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

const Input_Component = ({value,...props}) => {
    return(
        <Input value={value} {...props}/>
    )
}

export default Input_Component
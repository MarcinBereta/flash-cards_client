import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: #FFD600;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 34px;
width:10vw;
height:4vh;
font-size:100%;
`

const Button_Component = ({text}) => {
    return(
        <Button>{text}</Button>
    )
}

export default Button_Component
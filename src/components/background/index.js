import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
margin:0;
padding:0;
float:left;
width:82vw;
height:100vh;
background-color: #343434
`
const Background = ({children}) => (
    <MainDiv >{children}</MainDiv>
)

export default Background
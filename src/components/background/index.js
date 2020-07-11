import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
margin:0;
padding:0;
float:left;
height:100vh;
background-color: #343434
`
const Background_Component = ({children, width}) => (
    <MainDiv style={{width}} >{children}</MainDiv>
)

export default Background_Component
import React from 'react'
import styled from 'styled-components'
import Section_Card from '../section_card/index'

const MainDiv = styled.div`
margin:0;
padding:0;
float:left;
width:82vw;
height:100vh;
background-color: #343434
`
const Main = () => (
    <MainDiv>
        <Section_Card text={'zmienne'}/>
        <Section_Card text={'pętle'}/>
        <Section_Card text={'funkcje'}/>
        <Section_Card text={'eventy'}/>
        <Section_Card text={'routing'}/>
        <Section_Card text={'zasięg zmiennych'}/>
    </MainDiv>
)

export default Main
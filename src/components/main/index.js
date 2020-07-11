import React from 'react'
import Section_Card from '../section_card/index'
import Background from '../background/index'


const Main = () => {
    return(
    <>
        <Section_Card text={'zmienne'}/>
        <Section_Card text={'pętle'}/>
        <Section_Card text={'funkcje'}/>
        <Section_Card text={'eventy'}/>
        <Section_Card text={'routing'}/>
        <Section_Card text={'zasięg zmiennych'}/>
    </>
    )
}

export default Main
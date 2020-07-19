import React from 'react';
import styled from 'styled-components'
import Background from '../../components/background'

const Text_info = styled.h2`
color:white;
text-align:center
`

const PageNotFoundView = () => {
    return (
        <Background width="100%">
            <Text_info>Page not found :-( </Text_info>
        </Background>
    )
}

export default PageNotFoundView;
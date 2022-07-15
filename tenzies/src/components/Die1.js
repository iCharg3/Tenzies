import React from 'react'
import styled from 'styled-components'
import Dot from "./Dot"


export default function Die1() {
    return (
    <Container>
        <Dot></Dot>
    </Container>
  )
}

const Container = styled.div`
    height: 125px;
    width: 125px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`


import React from 'react'
import styled from 'styled-components'
import Dot from "./Dot"


export default function Die6() {
    return (
    <Container>
        <Wrap>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
        </Wrap>
        <Wrap>   
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
        height: 125px;
        width: 125px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
import React from 'react'
import styled from 'styled-components'
import Dot from "./Dot"


export default function Die2() {
    return (
    <Container>
        <Dot></Dot>
        <Wrap> 
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
       align-self: flex-end;
`
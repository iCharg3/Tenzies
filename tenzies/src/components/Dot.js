import React from 'react'
import styled from 'styled-components'


export default function Dot() {
    return (
    <Circ></Circ>
  )
}

const Circ = styled.div`
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: black;
`

import React from 'react'
import styled from "styled-components"
import Die1 from "./Die1"
import Die2 from "./Die2"
import Die3 from "./Die3"
import Die4 from "./Die4"
import Die5 from "./Die5"
import Die6 from "./Die6"



export default function Die(props) {
  
  const sty =  props.isHeld ? "#59E391" : "white" 

  let dieVal
  
  if(props.value === 1){
      dieVal = <Die1></Die1>
  }
  else if(props.value === 2){
      dieVal = <Die2></Die2>
  }
  else if(props.value === 3){
      dieVal = <Die3></Die3>
  }
  else if(props.value === 4){
      dieVal = <Die4></Die4>
  }
  else if(props.value === 5){
      dieVal = <Die5></Die5>
  }
  else {
      dieVal = <Die6></Die6>
  }

  return (
    <Container sty = {sty} onClick = {props.holdDice}>
        {dieVal}
    </Container>
  )
}

const Container = styled.div`
    height: 125px;
    width: 125px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    cursor: pointer;
    background-color: ${props => `${props.sty}`};
`

import React from 'react'
import styled from "styled-components";
import ReactDOM  from 'react-dom';

export default function Victory(props) {
  if(!props.value){
      return null
  }  

  return ReactDOM.createPortal(
    <Container>
      <Wrap>
        <Title>Congratulations!!!</Title>
        <Won>You Won</Won>
        <Score data-testid="display">
            Your Turns:{props.score}<br></br>
            Best Score:{props.best}
        </Score>
        <Button data-testid="button" onClick={props.onClose}>New Game</Button>
      </Wrap>
    </Container>,
    document.getElementById('portal')
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.9);
    display:flex;
    align-items:center;
    justify-content: center;
`
const Wrap =styled.div`
    width: 800px;
    height: 400px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`
const Title = styled.div`
    position: fixed;
    top: 220px;
    font-size : 50px;
`
const Won = styled.div`
    font-size: 35px;
    position:fixed;
    top: 300px;
`
const Score = styled.div`
    font-size: 20px;
    position: fixed;
    top:375px;
`
const Button = styled.div`
    background-color: blue;
    width: 100px;
    height:50px;
    border-radius: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    padding: 1px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    position:fixed;
    bottom: 220px;
`

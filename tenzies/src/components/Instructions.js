import React from 'react'
import styled from "styled-components";
import ReactDOM  from 'react-dom';

export default function Instructions(props) {
  if(!props.value){
      return null
  }  
  return ReactDOM.createPortal(
    <Container>
      <Wrap>
        <Title>How To Play?</Title>
        <List>
          <ul>
            <li>The objective Of the game is to make all the dice have the same value in minimum number of turns.</li>
            <li>The game has three difficulty levels: Easy, Medium and Hard.</li>
            <li>For each difficulty level the number of die are different.</li>
          </ul>
        </List>
        <Button onClick={props.onClose}>Let's Play</Button>
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
    width: 1000px;
    height: 500px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`
const Title = styled.div`
    position: fixed;
    top: 200px;
    font-size : 50px;
`
const List = styled.div`
    padding: 100px;
    font-size: 20px;
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
    bottom: 200px;
`

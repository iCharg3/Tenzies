import React from 'react';
import './App.css';
import styled from "styled-components";
import Die from "./components/Die";
import Instructions from "./components/Instructions";
import Victory from "./components/Victory";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'

function App() {

  const [dice , setDice] = React.useState(allNewDice(10))
  const [tenzies , setTenzies] = React.useState(false)
  const [count , setCount] = React.useState(0);
  const [difficulty , setDifficulty]= React.useState("Medium")
  const [show, setShow] = React.useState(false)
  const [topscore, setTopScore] = React.useState( () => {

        const saved = localStorage.getItem("score")
        const init = JSON.parse(saved)
        console.log(init)
        return init 
  })


  React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstvalue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstvalue)
        if(allHeld && allSameValue){
              setTenzies(true)
              console.log("You Won !!")
        }
  },[dice])


  React.useEffect(() => {
        localStorage.removeItem("score")
        localStorage.setItem("score", JSON.stringify(topscore))
  },[topscore])



  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }


  function allNewDice(noofdie){
      const newDice = []
      for(let i=0 ; i<noofdie ; i++){
          newDice.push(generateNewDie())
      }
      // console.log(newDice)
      return newDice
  }


  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>)


  function rollDice(){
     if(!tenzies){
        setDice(oldDice => oldDice.map(die => {
                  return die.isHeld ?
                  die :
                  generateNewDie()
          }))
        setCount(oldCount => oldCount +1)
      }
      else {
        setTenzies(false)
        let vari
        if(difficulty === "Easy"){
            vari = 6
        }
            else if(difficulty === "Medium"){
              vari = 10
        }
            else{
              vari = 14
        }
        setDice(allNewDice(vari))
        console.log(count)
        const saved = localStorage.getItem("score")
        if(count < saved){
          setTopScore(count)
        }
        setCount(0)
      }
  }


  function holdDice(id){
      setDice(oldDice => oldDice.map(die =>{
            return die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
      }))
  }

  function handleDifficulty(event){
      const val= event.target.value
      let noofdie
      if(val === "Easy"){
        noofdie = 6
      }
      else if(val === "Medium"){
        noofdie = 10
      }
      else{
        noofdie = 14
      }
      setDifficulty(val)
      setTenzies(false)
      setDice(allNewDice(noofdie))
      setCount(0)
  }


  function handleInst(){
      setShow(true)
  }

  let vari
  if(difficulty === "Easy"){
    vari = 3
  }
  else if(difficulty === "Medium"){
    vari = 5
  }
  else{
    vari = 7
  }


  return (
        <Container>
              <Instructions value={show} onClose = {() => setShow(false)}/>
              <Victory value={tenzies} score = {count} best = {topscore} onClose = {() => rollDice()}/>
              <Difficulty>
                Select Difficulty :
                <select value={difficulty} onChange={handleDifficulty}>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
              </Difficulty>
              <Inst onClick={handleInst}>How To Play?</Inst>
              <Game>
                  {tenzies && <Confetti/> }
                  <Text>TENZIES!!!</Text>
                  <Cnt>Turns: {count} &nbsp;&nbsp;&nbsp;&nbsp; Top Score: {topscore}</Cnt>
                    <Wrap sty ={vari} >
                      {diceElements}
                    </Wrap>
                    <Button onClick={rollDice}>
                      {tenzies ? "PLAY AGAIN" : "ROLL"}
                    </Button>
              </Game>
        </Container>
  );
}



const Container = styled.div`
    background-color: coral;
    height: 100vh;
    border-radius: 8px;
    padding: 50px;
`

const Text = styled.div`
    font-size: 4rem;
    color: black;
    font-weight: bold;
`
const Wrap = styled.div`
    display: grid;
    grid-template: auto auto / repeat(${props => `${props.sty}`},1fr);
    gap: 70px;
`

const Button = styled.div`
    background-color: blue;
    width: 250px;
    height:60px;
    border-radius: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 25px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: white;

    &:focus{
      outline: none;
    }
    &:active{
      box-shadow: inset 5px 5px 10px -3px rgba(0 ,0 ,0 ,0.7);
    }
`

const Cnt = styled.div`
    color: Green;
    font-size: 25px;
`

const Difficulty = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 30px;
    left: 0;
    top:  30px;
    right:  0;
    `

const Game = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Inst = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 30px;
    top: 30px;
    right: 10px;
    cursor: pointer;
`

export default App;

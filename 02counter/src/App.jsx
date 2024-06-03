import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addCounter = () =>{
    breakme:if(counter<25){
      counter = counter +1
    }
    else{
      break breakme
    }
    
    setCounter(counter)
  }

  const removeCounter = () => {
    breakme:if(counter>0){
      counter = counter - 1
    }
    else{
      break breakme
    }
    
    setCounter(counter)
  }

  const resetCounter = () => {
    counter = 0
    setCounter(counter)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>This counter has a range from 0 to 25</h2>
      <p>Your Current click is: {counter}</p>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={removeCounter}>Remove Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </>
  )
}

export default App

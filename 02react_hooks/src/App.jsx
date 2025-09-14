import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter = 15 ;

  const addValue = () =>{
   counter += 1;
   counter += 1;
   counter += 1;
   counter += 1;
   counter += 1;
   setCounter(counter)
   console.log("clicked",counter);
  }

  const removeValue =() =>{
    setCounter(counter-1);
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>
     <button 
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count ,setCount] = useState(0);

  return (
    <>
      <h1 className='bg-amber-500 text-shadow-black p-4 rounded-3xl'>Tailwind Test </h1>
      <Card username="Gaurav" btnTxt="Hello"/>
      <Card username="Hitesh" />
    </>
  )
}

export default App

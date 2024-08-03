import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
    </>
  )
}

export default App

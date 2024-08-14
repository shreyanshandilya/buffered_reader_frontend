import React from "react"
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Purpose from './components/landing page/purpose'
import Editions from "./components/editios/editions"

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<><Home /></>} />
      <Route path="/about" element={<><About /></>} />
      <Route path="/purpose" element={<Purpose />} />
      <Route path="/editions" element={<Editions />} />
    </Routes>
  </Router>
  )
}

export default App

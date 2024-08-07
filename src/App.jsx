import React from "react"
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Purpose from './components/landing page/purpose'

function App() {

  return (
    // <RouterProvider router={router} />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/purpose" element={<Purpose />} />
    </Routes>
  </Router>
  )
}

export default App

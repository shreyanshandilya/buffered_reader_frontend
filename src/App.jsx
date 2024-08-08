import React from "react"
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Purpose from './components/landing page/purpose'
import Footer from "./components/Footer"

function App() {

  return (
    // <RouterProvider router={router} />
    <Router>
    <Routes>
      <Route path="/" element={<><Home /><Footer/></>} />
      <Route path="/about" element={<><About /><Footer/></>} />
      <Route path="/purpose" element={<Purpose />} />
    </Routes>
  </Router>
  )
}

export default App

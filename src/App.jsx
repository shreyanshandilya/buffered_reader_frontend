import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Purpose from './components/landing page/purpose'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/purpose",
      element: <Purpose />
    },
  ])

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

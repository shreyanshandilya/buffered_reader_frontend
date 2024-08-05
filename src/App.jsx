import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
    <RouterProvider router={router} />
  )
}

export default App

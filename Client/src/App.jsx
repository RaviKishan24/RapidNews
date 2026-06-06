import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from "./Components/Home"

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: "/news/:category" }

      ]
    }

  ])
  return (
    <>
 
      <div data-theme="luxury">
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App

// import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
 import { router } from './routes/router'

function App() {
  
  
  return (
    <>
      <RouterProvider  router={router} />
      </>
  )
}

export default App

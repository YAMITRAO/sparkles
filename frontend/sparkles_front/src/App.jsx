// import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { router } from './routes/router'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  return (
    <> 
      <ToastContainer/>
      <RouterProvider router={router} > 
      </RouterProvider>
      </>
  )
}

export default App

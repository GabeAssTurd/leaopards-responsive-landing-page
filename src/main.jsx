import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Router} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.css";
import App from './App.jsx';
import Home from './pages/Home.jsx';


function About(params) {
  return(<>
  
  About
  </>)
}

const router = createBrowserRouter(
  createRoutesFromElements(<>
  <Route path='/' element={<App/>} >
  <Route index element={<Home/>} />
  <Route path='/about' element={<About/>} /> 
    
    </Route> 
  </>)
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)



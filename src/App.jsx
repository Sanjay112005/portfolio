import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import RoutesComponent from '../files/routes';
import Navbar from '../ui/Navbar';












function App() {
  return (
 <div>
 <BrowserRouter>
 {/* <Navbar /> */}
    <RoutesComponent />




 </BrowserRouter>
 </div> 
  )
}

export default App

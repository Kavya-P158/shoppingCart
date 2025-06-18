
import './App.css'

import { Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
    </Routes>
    
  
   
    </>
  )
}

export default App

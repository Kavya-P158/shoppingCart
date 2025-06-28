
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
function App() {

 const[cartItem,setCartItem]=useState([])
    const addToCartfn=(product,quantity)=>{

      setCartItem(
        (prev)=>{
           const item=cartItem.find((item)=>item.id===product.id);
           if(item){
            return cartItem.map((curritem)=>
              curritem.id===item.id? ( {...curritem,quantity:curritem.quantity+quantity}):( curritem)
      )}
           
           else{
           
             const newproduct={...product,quantity:quantity}
              console.log("New product",newproduct)
            return [...prev,newproduct]
           }
        }
      )
     
  
   
  }
  const removeFromCart=(id)=>{
    setCartItem((prev)=>prev.filter((item)=>item.id!=id))
  }
   
  const clearCart=()=>{
    setCartItem([])
  }
  return (
    <>
    <Navbar totalItems={cartItem.reduce((sum,item)=>sum+item.quantity,0)}/>
 

   
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage handleCart={addToCartfn}/>} />
      <Route path='/cart' element={<Cart
       cartItem={cartItem} 
       updateCart={addToCartfn}
       removeFromCart={removeFromCart}
       clearCart={clearCart}
       />}/>
    </Routes>
    
  
   
    </>
  )
}

export default App

import styles from './cart.module.css'
import {useState} from 'react';
import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router';
const Cart = ({cartItem,updateCart,removeFromCart,clearCart}) => {

  const[showModal,setshowModal]=useState(false)
  const navigate=useNavigate()
  const handleConfirmation=()=>{
setshowModal(false);
clearCart()
navigate('/shop')
  }
  return (
    <div className={styles.cartContainer} id='cart'>
    {cartItem.length==0 ? (<p className={styles.cartHeading}>Your cart is empty</p>) :(
        <>
<p className={styles.cartHeading}>Your Cart</p>
        
      { cartItem.map((item)=>{
        console.log("ITEm",item)
        console.log(item.quantity-1)
            return(
               <div className={styles.cartItem} key={item.id}>
                <div className={styles.imgContainer}>
                  <img src={item.image} alt={item.title}/>
                <div className={styles.quantityContainer}>
<button 
className={styles.quantityButton}
 disabled={item.quantity<=1}
  aria-label="Decrease quantity"
  onClick={()=>updateCart(item,-1)} >-</button>
<span>{item.quantity}</span>
<button 
className={styles.quantityButton}
 aria-label="Increase quantity"
 onClick={()=>updateCart(item,1)} >+</button>
                </div>
                </div>



                <div className={styles.detailsContainer}>
 <h3>{item.title}</h3>
                <p>x {item.quantity}</p>
                <p>{`$ ${(item.price*item.quantity).toFixed(0)}`}</p>
              
<button className={styles.removeButton}
onClick={()=>removeFromCart(item.id)}>Remove</button>
               
                </div>

               </div>
            )
        })
    }
    <div className={styles.totalContainer}>
      <p> Total amount: {`$ ${(cartItem.reduce((sum,item)=>(sum+(item.quantity*item.price)),0).toFixed(0))}`}</p>
      <button className={styles.checkoutbtn} onClick={()=>setshowModal(true)}>Proceed to Checkout</button>
      {showModal && createPortal(
        <div className={styles.modalContainer}>


        <div className={styles.modalContent}>
          <p>Order confirmed!<p>
            <br />
            </p> Thank you for shopping with us !</p>
          </div>
          <button onClick={handleConfirmation}>Continue Shopping</button>
          </div>
          ,document.getElementById('cart')
      )}
    </div>
    </>
   ) }

    
    </div>
  )
}

export default Cart
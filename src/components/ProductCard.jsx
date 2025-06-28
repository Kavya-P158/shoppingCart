import React,{useState} from 'react'
import styles from './cards.module.css'
const ProductCard = ({data,handleCart}) => {
  const [quantity,setQuantity]=useState(1);
  const increaseQuantity=()=>{
    setQuantity((prev)=>prev+1);
  }
  const decreaseQuantity=()=>{
    setQuantity((prev)=>Math.max(prev-1,1))
  }
  // console.log(quantity)
  return (

    <div className={styles.card} >
<div className={styles.image}>
    <img src={data.image || data.thumbnail} alt="product" loading='lazy'/>
</div>
<div className={styles.details}>
    <h3>{data.title}</h3>
   
    <p className={styles.price}>${data.price}</p>
    <div className={styles.qtyContainer}>
 <button className={styles.qtyBtn} onClick={decreaseQuantity}>-</button>
    <input className={styles.qtyInput} type="number" id="qty" value={quantity} min="1" onChange={(e)=>setQuantity(Number(e.target.value))}/>
    <button className={styles.qtyBtn} onClick={increaseQuantity}>+</button>
    </div>
   {console.log("Quantity in card",quantity)}
    <button className={styles.addtoCrt} onClick={()=>handleCart(data,quantity)}>Add to cart</button>
</div>
    </div>
  )
}

export default ProductCard
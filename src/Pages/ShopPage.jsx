import React,{useEffect,useState}from 'react'
import styles from './shop.module.css'
import ProductCard from '../components/ProductCard';
import { PiSpinner } from "react-icons/pi";
const ShopPage = ({handleCart}) => {
  const[products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
 const [filteredproducts,setFilteredProducts]=useState(products)
 
  useEffect(()=>{

    const fetchData=async()=>{
 try{
  const response=await fetch('https://fakestoreapi.com/products');
  const data=await response.json();
  console.log('Fetched products:', data);
  setProducts(data);
  setFilteredProducts(data);
 }
 catch(err){
  console.error('Error fetching data:', err)
 }
 finally{
  setLoading(false)
 }
    }
    fetchData()
  },[])
  if(loading){
    return <div style={{color:'white'}}><PiSpinner /></div>
  }
 
  const handleCategory=(category)=>{
    category=="all"?setFilteredProducts(products):setFilteredProducts(products.filter((product=>product.category==category)));
  }
  return (
    <>
       <div className={styles.categoryContainer}> 
      <button onClick={()=>handleCategory("all")}>All</button>
      <button onClick={()=>handleCategory("men's clothing")}>Men's Clothing</button>
      <button onClick={()=>handleCategory("women's clothing")}>Women's Clothing </button>
      <button onClick={()=>handleCategory("jewelery")}>Jewelry</button>
      <button onClick={()=>handleCategory("electronics")}>Electronics</button>
  </div>
    <div className={styles.shop}>
 
    {
      filteredproducts.map((product)=><ProductCard key={product.title} data={product} handleCart={handleCart}/>)
    }

  
    </div>
    </>
  )
}

export default ShopPage
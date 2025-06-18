import React from 'react'
import { Link, Outlet } from 'react-router'
import styles from './home.module.css'
const HomePage = () => {
   
  return (
    <>
    <div className={styles.shop}>
<button ><Link to='shop'>Let's Shop</Link></button>
</div>
     </>
  )
}

export default HomePage
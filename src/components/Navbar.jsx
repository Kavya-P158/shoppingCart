import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
   
        <nav className={styles.navbar}>
            <div className={styles.container}>
            <div className={styles.logo}>
                Shopee World
            </div>
<div className={styles.link}>
        <NavLink to='/' className={({isActive})=>isActive?'active':''}>Home</NavLink>
    
        <NavLink to='/shop' className={({isActive})=>isActive?'active':''}>Shop</NavLink>
  </div>
             </div>
        </nav>
    
  )
}

export default Navbar
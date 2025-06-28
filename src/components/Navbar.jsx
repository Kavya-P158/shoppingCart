import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping as faCartShoppingSolid } from '@fortawesome/free-solid-svg-icons'
import  { clsx } from 'clsx';
const Navbar = ({totalItems}) => {
  
  return (
   
        <nav className={styles.navbar}>
            <div className={styles.container}>
            <div className={styles.logo}>
                Shoppora
            </div>
<div className={styles.links}>
  
        {/* <NavLink to='/' className={({isActive})=>isActive?`${styles.link}${styles.active}`:styles.link}>Home</NavLink> */}
   <NavLink to='/' className={({isActive})=>clsx(styles.link,isActive && styles.active)}>Home</NavLink>
        <NavLink to='/shop' className={({isActive})=>clsx(styles.link,isActive && styles.active)}>Shop</NavLink>
      </div>


  <div className={styles.cart}>
   
          <NavLink to='/cart' className={({isActive})=>isActive?'active':''}> <FontAwesomeIcon icon={faCartShoppingSolid} size='lg' color='white' />
            <span className={styles.cartCount}>{totalItems}</span>
            </NavLink>
   
  </div>
             </div>
        </nav>
    
  )
}

export default Navbar
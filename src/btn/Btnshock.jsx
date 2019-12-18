import React from 'react';
import styles from './btn-styles/Btnshock.module.scss'
 const Btnshock = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btnshock;
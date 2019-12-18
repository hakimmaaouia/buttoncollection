import React from 'react';
import styles from './btn-styles/Btnlogout.module.scss';
 const Btnghost = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>
   <div className={styles.i}> go back  </div>
   <div className={styles.span}>{e.text}</div>
   </div>

     )
 }

 export default Btnghost;
import React from 'react';
import styles from './btn-styles/Btncart.module.scss';
 const Btncart = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btncart;
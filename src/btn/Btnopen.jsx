import React from 'react';
import styles from './btn-styles/Btnopen.module.scss';
 const Btnopen = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btnopen;
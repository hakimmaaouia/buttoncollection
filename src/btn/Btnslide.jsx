import React from 'react';
import styles from './btn-styles/Btnslide.module.scss';
 const Btnslide = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btnslide;
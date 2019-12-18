import React from 'react';
import styles from './btn-styles/Btnclose.module.scss';
 const Btnclose = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
 <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btnclose;
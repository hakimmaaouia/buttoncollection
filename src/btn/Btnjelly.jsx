import React from 'react';
import styles from './btn-styles/Btnjelly.module.scss';
 const Btnghost = (e) => {
   document.documentElement.style.setProperty('--color', e.color)
     return(
     <div className={styles.btn}>{e.text}</div>

     )
 }

 export default Btnghost;
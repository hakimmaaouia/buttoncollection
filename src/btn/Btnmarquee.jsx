import React from 'react';
import styles from './btn-styles/Btnmarquee.module.scss';
 const Btnmarquee = (e) => {
  console.log(styles.btn);
   document.documentElement.style.setProperty('--color', e.color)
     return(
     <div className={styles.btn}> <span data-text={e.text}> {e.text} </span></div>

     )
    
 }

 export default Btnmarquee;
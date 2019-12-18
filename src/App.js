import React, { useState } from 'react';import styles from './App.module.scss';
import Btnghost from './btn/Btnghost.jsx'
import Btnjelly from './btn/Btnjelly.jsx'
import Btnfillin from './btn/Btnfillin.jsx'
import Btnpulse from './btn/Btnpulse.jsx'
import Btnshock from './btn/Btnshock.jsx'
import Btnopen from './btn/Btnopen.jsx'
import Btnflipdown from './btn/Btnflipdown.jsx'
import Btnslide from './btn/Btnslide.jsx'
import Btnmarquee from './btn/Btnmarquee.jsx'
import Btncart from './btn/Btncart.jsx'
import Btnlogout from './btn/Btnlogout.jsx'
import Btnclose  from './btn/Btnclose.jsx'

const App = () => {
  const [count, setCount] = useState("");



  const oncolorchange = (e) => {
    setCount(e.target.value)
  }


  const onbackgroundchange = (e) => {
    document.body.style.backgroundColor = e.target.value;
  }
  
return(
<div>
  <h1>Button Collection</h1>
<div className={styles.btncontainer}>
  <Btnghost color={count}  text ="Ghost"/>
  <Btnjelly color={count}  text ="Jelly"/>
  <Btnshock color={count}  text ="Shock"/>
  <Btnfillin color={count} text ="Fill in"/>
  <Btnpulse color={count}  text ="Pulse"/>
  <Btnopen color={count}  text ="Open"/>
  <Btnflipdown color={count}  text ="Flip" />
  <Btnslide color={count}  text ="Slide" />
  <Btnmarquee color={count}  text ="passe" />
  <Btnclose color={count}  text ="close" />
  <Btncart color={count}  text ="cart" />
  <Btnlogout color={count}  text ="logout" />


</div>



<div className={styles.inputcolorcontainer}>
<input type="color" defaultValue="#00aed1"  onChange={oncolorchange} />
<input type="color"  defaultValue="#202020"  onChange={onbackgroundchange} />
</div>
<h5>copyright by hakim 🖖🖖</h5>
</div>  
  )
}



export default App;

import React from 'react';
import Logo from '../src/Logo/Logo.png';
const Head = () => {
     return(<>
        <div className="Header">
         <img src = {Logo} alt ="logo" width ="150px" height="100px" />
         <h1 className ="Head">Keep Your File Safe</h1>
         </div></>)
}
export default Head;
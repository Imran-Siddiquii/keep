import React from 'react';
 
const Footer =()=>{
    var year = new Date().getFullYear();
    return(<>
     
        <h6 className ="footer">copyright @{year}</h6>
     </>)
}
export default Footer;
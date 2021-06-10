import React, { useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from './Head'
import Create from './Create';
import Notes from './Notes';
import Footer from './Footer';

const App = () => {
    const[item , newItem] = useState([ ]);
    

    const fatchNote = (note) =>{
         newItem((preData)=>{
             return[...preData,note]
         })
    }
    const deleteCon = (id) => {
        newItem((olddata)=>
            olddata.filter((curdata , index) => {
                return index !== id;
        })
        );
    };

    return(<><Head/>
      <Create fatch = {fatchNote}/>
      {
      item.map((val,index)=>
      {
          return(<Notes
              key ={index}
              id = {index}
              name ={val.title}
              content ={val.content}
              deleteData= {deleteCon}
         /> )
        })
      }
      <Footer/>
</>)
}
export default App;
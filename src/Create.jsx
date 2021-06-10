import React, { useState } from 'react';

const Create = (props)=>{
  const[note , newNote] = useState({
      title: " ",
      content: " "
  } );
  const [expand , setExpand] = useState(false);

  const onEvent = (main) =>{
    //   newNote(main.target.value);
      const{name , value} = main.target;
      newNote((preVal)=>{
         
        return{ 
            ...preVal,
            [name]: value
              
        }
          
      })
      
    } 
     const onSubmit = () => {
     props.fatch(note)
     newNote(
        {
            title: " ",
            content: " "
        }     
    )
    }
    const expandIt=()=>{
        setExpand(true);
    }
    const normal= () =>{
        setExpand(false);
    }
   
    return(<>
        <div className = "create_note" onDoubleClick={normal}>
            {expand?
            <input type = "text" 
            placeholder = "File Title*"
            onChange={onEvent}
            name ="title"
            value={note.title}
            required/>:null}
            <br/>
            
            <textarea type= "text"
             rows = "8"
             cols= "40"
             placeholder ="Write your Credential"
             onChange={onEvent}
             name="content"
             value= {note.content}
             onClick ={expandIt}
             required/>
             {expand?
            <button onClick = {onSubmit}>+</button>:null}
            
        </div>

    </>)
}
export default Create;
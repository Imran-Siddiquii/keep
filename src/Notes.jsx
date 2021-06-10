import React from 'react';

const Notes =(props) =>{
    const onDelete = () =>{
     props.deleteData(props.id);  
    }
    return(<>
           <div className = "notes_file">
               <h3>{props.name}</h3>
               <br/>
               <p>{props.content}</p>
               <button onClick = {onDelete}>Delete</button>
           </div>
    </>)
}
export default Notes;
import React,{useContext} from 'react';
import {DataContext} from'./Data';

export default function Listitems({todo,id}) {
    const [todos,setTodos]=useContext(DataContext);
    console.log(todos);
  return (
    <div>
  
    <ul>
    <li>
       <label htmlFor={id}>
       <input type="checkbox" id={id}/>
       {todo.name}
       </label>
       <button>Edit</button>
    </li>
 </ul>
    </div>
  )
}

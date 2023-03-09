import React,{useState,useContext} from 'react';
import { DataContext } from './Data';

export default function Input() {

  const[todos,setTodos]=useContext(DataContext);
  const[todoName ,setTodoName ]=useState('');
  const addTodo= e =>{
    e.preventDefault();
    setTodos([...todos ,{name:todoName,Complete:false}])
    setTodoName('');
  }
  return (
    <div>
    <form autoComplete="off" onSubmit={addTodo}>
    <input type = "text" name= "todos"  id="todos"
     value={todoName} 
     onChange={(e)=>setTodoName(e.target.value.toLowerCase())}/>

    <button type="submit">Create</button>
    </form>
    </div>
  )
}

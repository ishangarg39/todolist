import React,{useContext,useState} from 'react';
import {DataContext} from'./Data';


export default function Footer() {
    const [todos,setTodos]=useContext(DataContext);
    const[todoName ,setTodoName ]=useState('');

    const DeleteList=()=>
    {
        const newItems = Object.assign([], ...todos);
    todos.splice(0, 1);
    setTodos(newItems);

    }

  return (
    <div>
    <div className="row">
    <label htmlFor="all">
    
    </label>
    <p>You have 0 todo</p>
    <button id="delete" onClick={DeleteList}>Delete</button>
    </div>
    </div>
  )
}

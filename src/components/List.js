import React,{useContext} from 'react';
import Listitems from './Listitems';
import {DataContext} from'./Data';

export default function List() {
    const [todos,setTodos]=useContext(DataContext);
  return (
    <div>
    <ul>
  {  todos.map((todos,index)=>(
        <Listitems todo={todos} key={index} id={index}/>
    ))}
    </ul>
    </div>
  )
}

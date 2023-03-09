import './App.css';
import React from 'react';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import {Data} from './components/Data';
function App() {
  return (
    <Data>
    <div className="App">
     
     <h1>To Do List</h1>
    <Input/>
    <List/>
    <Footer/>
     
     

    </div>
    </Data>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import './App.css';
import style from './App.css'
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import ListTodo from './components/ListToDo/ListTodo';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

function App() { 
const [todo, setTodo] = useState([])

  return (
    <div className='App'>
          <Header />
          <AddTodo todo={todo} setTodo={setTodo}/>
          <ListTodo todo={todo} setTodo={setTodo}/>
    </div>
    
  );
}
export default App;

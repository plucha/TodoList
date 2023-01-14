import React, {useState} from 'react'
import { v1 as uuidv1 } from 'uuid';
import style from './AddTodo.module.css'
function AddTodo ({todo, setTodo}) {
    const [value, setValue] = useState('')

    function saveTodo(){
        if(value){
            setTodo(
            [ ...todo, {
              id: uuidv1(),
              title: value,
              status: true
            }]
        )
        setValue('')
        } 
    }
    return(
        <div className={style.addTodoForm}>
                <input className={style.brd} placeholder='Add item' value={value} onChange={ (e)=>setValue(e.target.value)}/>
                <button className={style.btn} onClick={saveTodo}>Save</button>
            
        </div>
    )
}
export default AddTodo
import React, {useEffect, useState} from 'react'
import style from './ListTodo.module.css'

function ListTodo({todo, setTodo}) {
    
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)
    useEffect( ()=>(
        setFiltered(todo)
        ),
        [todo]
    )
    useEffect( () => {
        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
          setTodos(loadedTodos)
        }
      
       }, []) 
       useEffect( () => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('todos', temp)
       }, [todos])
      
      
    function filterTodo(status){
        if(status==='all'){
            setFiltered(todo)
        }
        else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo) 
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if (item.id == id){
            item.status = !item.status
        }
        return item 
    })
    setTodo(newTodo)
    }
    function saveTodo(id, title){
        let newTodo = [ todo].map(item =>{
            if (item.id == id){
                item.title = value

            }
            return item
        })
        setTodo(newTodo)
    }
    return(
        <div >
            <button className={style.btn1} onClick={() => filterTodo('all')}> All </button>
            <button className={style.btn1} onClick={() => filterTodo(false)}> Done </button> 
            <button className={style.btn1} onClick={() => filterTodo(true)}> Todo </button>
                      
            {
                filtered.map(item => (
                    <div className={style.listItems} key={item.id} >
                        {
                           <div className={ !item.status ? style.done : ''}> {item.title}</div>
                        }
                    {
                        <div >
                            <button className={style.btn} onClick={() => statusTodo(item.id)} > Done </button>
                            <button className={style.btn} onClick={() => deleteTodo(item.id)}> Delete </button> 
                        </div>
                    } 
                    </div>
                ))
            }
        </div>
    )
}
  export default ListTodo;
import React, { useState } from 'react'
import TodoItem from './TodoItem';
import data from '../data/todo.json'


const Todos = () => {
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState(data);
    const [todoCounter,setTodoCounter]=useState(data.length+1);

const handleChange=(e)=>{
  setTask(e.target.value)
};
const handleAdd=()=>{
    setTodoCounter((prev)=>prev+1);
    let newTodo={
        title:task,
        id:todoCounter,
    }
    setTodo([...todo,newTodo]);
}
const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
// useEffect(() => {
//   return () => {
//     console.log(todo)
//   }
// }, [todo])



  return (
    <>
    <h1>Todo</h1>
    <input type={"text"}value={task} placeholder="enter the todo"onChange={handleChange}
      style={{ marginBottom:"50px", marginLeft:"15%"}}/>
    <button onClick={()=>handleAdd()}>Add</button>
    <div>
    {todo.map((item, index) => {
              return (
                <TodoItem
                  item={item}
                  handleDelete={handleDelete}
                  //   key={item.id}
                  isHidden={index % 2 === 0}
                />
              );
            })}
    </div>
    </>
  )
}

export default Todos
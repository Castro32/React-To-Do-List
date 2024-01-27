import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; 
function TodoList (){
    const [tasks, setTasks] = useState ([
        {
            id:1,
            text: 'Wake Up',
            completed : true,
        },
        {
            id:2,
            text:'Groom Myself',
            completed: true,
        },
        {
            id:3,
            text:'Attend Zoom Class',
            completed: true
        },
        {
            id:4,
            text:'Go to S.O.T Office',
            completed: false
        }
    ]);
    const [text, setText]=useState('');
    function addTask(text){
        const newTask={
            id:Date.now(),
            text,
            completed:false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(tasks=>tasks.id!=id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        }));
      }
      
    return(
        <div className='to-do-list'>
            {tasks.map(task=>(
                <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                />
            ))}
            <input 
            value={text}
            onChange={e=>setText(e.target.value)}
            />
            <button onClick={()=>addTask(text)}>Add</button>
        </div>
    );
}

export default TodoList;
import React from "react";
import Task from './Task'

function TaskList({tasks, setTasks}) {
  function handleDeleteTask(e){
    const newTasks = tasks.filter(task => task.text !== e.target.parentElement.querySelector('.text').textContent)
    setTasks(newTasks)
  }

  return (
    <div className="tasks">
      {
        tasks.map(task => {
          return <Task key={task.id} text={task.text} category={task.category} handleDelete={handleDeleteTask}/>
        })
      }
    </div>
  );
}

export default TaskList;

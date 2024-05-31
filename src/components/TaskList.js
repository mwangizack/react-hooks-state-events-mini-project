import React from "react";
import Task from './Task'

function TaskList({initialTasks}) {
  return (
    <div className="tasks">
      {
        initialTasks.map(task => {
          return <Task key={Date.now()} text={task.text} category={task.category}/>
        })
      }
    </div>
  );
}

export default TaskList;

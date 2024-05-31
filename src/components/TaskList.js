import React, { useState } from "react";
import Task from './Task'

function TaskList({initialTasks}) {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className="tasks">
      {
        tasks.map(task => {
          return <Task key={Date.now()} text={task.text} category={task.category}/>
        })
      }
    </div>
  );
}

export default TaskList;

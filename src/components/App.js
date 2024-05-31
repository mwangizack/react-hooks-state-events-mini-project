import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleCategoryClick(e) {
    const categoryButtons =
      e.target.parentElement.querySelectorAll(".selected");
    const categoryButtonsArray = Array.from(categoryButtons);
    for (const btn of categoryButtonsArray) {
      btn.classList.remove("selected");
    }
    e.target.classList.add("selected");
    setSelectedCategory(e.target.textContent);
  }

  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: formData.taskName,
      text: formData.text,
      category: formData.category,
    };
    setTasks([...tasks, newTask]);
    setFormData({
      text: "",
      category: "Code",
    });
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    }

    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <TaskList tasks={tasksToDisplay} setTasks={setTasks} />
    </div>
  );
}

export default App;

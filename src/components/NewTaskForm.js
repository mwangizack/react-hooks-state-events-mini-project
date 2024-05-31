import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, formData, setFormData}) {

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
          {categories.map(category => category !== 'All' ? <option value={category}>{category}</option> : null)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

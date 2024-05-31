import React from "react";

function CategoryFilter({categories, handleClick}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={handleClick}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;

import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  // initialzing the state for the search text
  const [searchText, setSearchText] = useState('')

  // function to handle changes in the search input
  const handleSearchChange = (e) => {
    // updating the state with the new search text
    setSearchText(e.target.value)
    // calling te onSearchChange function passed as a prop
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchText} onChange={handleSearchChange}// setting up an event handler for input changes
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({onItemFormSubmit}) {
  // initializing state for the item name and category
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('')

  // function to handle changes in the item name input
  const handleChangeName = (e) => {
    setItemName(e.target.value)
  }

  // function to handle changes in the category select
  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value)
  }

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // createe a new item
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }

    // calling the onItemFormSubmit function passed as a prop
    onItemFormSubmit(newItem)

    // clearing input fields
    setItemName('')
    setItemCategory('')
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleChangeName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

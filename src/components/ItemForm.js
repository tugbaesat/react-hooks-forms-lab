import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: " ",
    category: "Produce",
  });

  function handleChangeNewItem(event) {
    const value = event.target.value;
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...newItem,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChangeNewItem}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItem.category}
          onChange={handleChangeNewItem}
        >
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

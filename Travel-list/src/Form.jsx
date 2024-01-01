import { useState } from "react";

export function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItem(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Where do you wanna go?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setquantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
      <input
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}

import { useState } from "react";
const initialItems = [
  { id: 1, description: "Pants", quantity: 3, packed: false },
  { id: 2, description: "Jacket", quantity: 1, packed: false },
  { id: 3, description: "iPhone Charger", quantity: 1, packed: false },
  { id: 4, description: "MacBook", quantity: 1, packed: false },
  { id: 5, description: "Sleeping Pills", quantity: 1, packed: true },
  { id: 6, description: "Underwear", quantity: 5, packed: false },
  { id: 7, description: "Hat", quantity: 1, packed: false },
  { id: 8, description: "T-Shirts", quantity: 5, packed: false },
  { id: 9, description: "Belt", quantity: 1, packed: false },
  { id: 10, description: "Passport", quantity: 1, packed: true },
  { id: 11, description: "Sandwich", quantity: 1, packed: true },
];
function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleRemoveItem(id) {
    console.log(id);
    setItems(items.filter((i) => i.id !== id));
  }
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ onAddItem }) {
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
function PackingList({ items, onRemoveItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  else sortedItems = items.sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onRemoveItem={onRemoveItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
}
function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You have no items in your list</em>
      </footer>
    );
  let length = items.length;
  let packed = items.filter((item) => item.packed).length;
  let percentage = Math.round((packed / length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go !!!"
          : `You have ${length} items in your list and you have already packed 
        ${packed} items ${percentage}%.`}
      </em>
    </footer>
  );
}
function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button
        onClick={() => {
          onRemoveItem(item.id);
        }}
      >
        X
      </button>
    </li>
  );
}
export default App;

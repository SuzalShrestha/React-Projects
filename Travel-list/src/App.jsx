import { useState } from "react";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";
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
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;

import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onRemoveItem,
  onToggleItem,
  onClearList,
}) {
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
      <button onClick={onClearList}>Clear list</button>
    </div>
  );
}

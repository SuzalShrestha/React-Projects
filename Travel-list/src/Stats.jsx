export function Stats({ items }) {
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

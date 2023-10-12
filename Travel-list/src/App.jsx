const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Books", quantity: 10, packed: true },
  { id: 4, description: "Clothes", quantity: 4, packed: false },
  { id: 5, description: "Laptop", quantity: 1, packed: false },
  { id: 6, description: "Currency", quantity: 1200, packed: true },
];
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>Where do you wanna go?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X items in your list and you have already packed x items x%
      </em>
    </footer>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
export default App;

import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function FriendsList() {
  const [friends, setFriends] = useState(initialFriends);
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt="friend.name" />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          You owe your friend {friend.name} {Math.abs(friend.balance)}
        </p>
      ) : (
        <p>{friend.name} is all even with you</p>
      )}
      <button className="button">Select</button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill</h2>
      <label>💰 Bill Value</label>
      <input type="text"></input>
      <label>🧑 Your expenses</label>
      <input type="text"></input>
      <label>🧑‍🤝‍🧑 X's expenses</label>
      <input type="text" disabled></input>
      <label>💲 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑🏼‍🤝‍🧑🏻 Friend Name</label>
      <input type="text"></input>
      <label>🖼️ Image URL</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}

export default App;

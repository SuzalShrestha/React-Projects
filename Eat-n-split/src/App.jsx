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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }
  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    handleShowAddFriend();
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            handleShowAddFriend={handleShowAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function FriendsList({ friends }) {
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
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
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

function FormAddFriend({ onAddFriend, handleShowAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑🏼‍🤝‍🧑🏻 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      <Button>Add</Button>
    </form>
  );
}

export default App;

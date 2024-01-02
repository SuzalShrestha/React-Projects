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
      <FriendsList />
    </div>
  );
}
function FriendsList() {
  const [friends, setFriends] = useState(initialFriends);
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => {
          return <Friend friend={friend} key={friend.id} />;
        })}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt="friend.name" />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          `${friend.name} owes you ${friend.balance}`
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          `You owe your friend ${friend.name} ${Math.abs(friend.balance)}`
        </p>
      ) : (
        <p>`${friend.name} is all even with you`</p>
      )}
      <button className="button">Select</button>
    </li>
  );
}

export default App;

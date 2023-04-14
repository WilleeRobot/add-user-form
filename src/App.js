import { useState } from "react";
import "./App.css";
import AddUserForm from "./Components/Users/AddUserForm";
import UsersList from "./Components/Users/UsersList";

const DUMMY_DATA = [
  {
    id: "x1",
    name: "Jane",
    age: "32",
  },
  {
    id: "x2",
    name: "Charles",
    age: "43",
  },
  {
    id: "x3",
    name: "Nicolas",
    age: "5",
  },
  {
    id: "x4",
    name: "Sebastian",
    age: "3",
  },
];

function App() {
  const [userList, setUserList] = useState(DUMMY_DATA);
  const addUser = (newUser) => {
    console.log("Here's the new guy received in App:");
    console.log(newUser);
    setUserList((prevState) => {
      return [newUser, ...prevState];
    });
  };
  return (
    <div className="App">
      <header className="container">
        <h1>Primitive Add User Form</h1>
      </header>
      <AddUserForm handleNewUser={addUser} />
      <UsersList userListData={userList} />
    </div>
  );
}

export default App;

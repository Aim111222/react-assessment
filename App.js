import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./styles.styles.css";



const App = () => {
  const [users, serUsers] = useState([]);
  useEffect(()=>{
    axios
    .get("https://jsonPlaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch((error) => console.error(error));
  }, [])

  const addUser = (newUser) =>{
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user)=>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user)=>
      user.id !== id
    );
    setUsers(filteredUsers);
  };

  return(
    <div className="app">
      <h1>User Management</h1>
      <UserForm addUser={addUser}/>
      <UserList user = {users} updateUser = {updateUser} deleteUser = {deleteUser}/>

    </div>
  );
};

export default App
import React from "react";
import UserEditModel from "./UserEditModel";

const UserList = ({users, updateUser, deleteUser}) =>{
    return(
        <div className = "user-list">
            <h2>User List</h2>
            {users.mapp((user) => (
                <div key = {user.id} className = "user-item">
                    <div>
                        <strong>{user.name}</strong> - {user.email}
                    </div>
                    <div>
                        <UserEditModel user = {user} updateUser = {updateUser}/>
                        <button onClick={()=> deleteUser(user.id)}>Delete</button>
                    </div>
                    </div>
            ))}
        </div>
    );
};
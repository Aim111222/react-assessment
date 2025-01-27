import React, {useState} from "react";
const UserForm = ({addUser}) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        const newUser = {
            id: Date.now(),
            name,
            email,
        };
        addUser(newUser);
        setName("");
        setEmail("");
    };
    return(
        <form onSubmit = {handleSubmit} className="user-form">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">Add User</button>
            
        </form>
    );
};
export default UserForm;
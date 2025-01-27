import React, {useState} from "react";
const UserEditModel = ({user, updateUser}) => {
    const [isEditing, setIsEditing] useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({...user, name, email});
        setIsEditing(false);
    };
    return(
        <div>
            <button onClick={() => setIsEditing(true)} >Edit</button>
            {isEditing && (
                <div className="model">
                    <form onSubmit = {handleSubmit} className="user-form">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setEmail(e.target.value)}/>
                        <button type="submit">Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                    </div>
            )}
        </div>
        
    );
};

export default UserEditModel;



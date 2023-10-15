import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        // console.log('delete:', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log("delete", data);
                if (data.deletedCount > 0) {
                    alert('delete successful');
                    const remaining = users.filter(user => user._id !== _id);
                    console.log(remaining);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <p>Total users: {users.length}</p>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name}:
                        {user.email}
                        {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;
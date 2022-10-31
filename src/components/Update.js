import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser)


    const handleUpdateUser = (event) => {
        event.preventDefault();
        console.log(user)

    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(field, value);
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    console.log(storedUser);
    return (
        <div>
            <h1>This is update page</h1>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name="name" id="" required />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name="email" id="" required />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;
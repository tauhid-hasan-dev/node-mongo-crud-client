import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Data added successfully');
                    event.target.reset();
                }
            })

    }

    const handleOnBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(field, value);
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleOnBlur} type="text" name="name" id="" required />
                <br />
                <input onBlur={handleOnBlur} type="email" name="email" id="" required />
                <br />
                <input onBlur={handleOnBlur} type="password" name="password" id="" required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    console.log(users)

    const handleDelete = _id => {
        const agree = window.confirm('Are you sure you want to delete')
        /* console.log(agree) */
        if (agree) {
            fetch(`http://localhost:5000/users/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
            /* console.log('deleting', _id); */
        }
    }
    return (
        <div>
            <h1>This is home</h1>
            <div>
                {
                    users.map(user =>
                        <p key={user._id}>{user.name}: {user.email}
                            <button onClick={() => handleDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const [displayUser, setDisplayUser] = useState(users)
    console.log(users)

    const handleDelete = _id => {
        const agree = window.confirm('Are you sure you want to delete')
        /* console.log(agree) */
        if (agree) {
            fetch(`http://localhost:5000/users/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainedUser = displayUser.filter(usr => usr._id !== _id)
                        setDisplayUser(remainedUser)
                    }
                })
        }
    }

    return (
        <div>
            <h1>This is home</h1>
            <div>
                {
                    displayUser.map(user =>
                        <p key={user._id}>{user.name}: {user.email}
                            <Link to={`/update/${user._id}`}><button>update</button></Link>
                            <button onClick={() => handleDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Home;
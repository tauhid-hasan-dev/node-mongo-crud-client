import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>This is home</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Home;
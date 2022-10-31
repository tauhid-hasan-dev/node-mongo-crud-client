import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>This is update page</h1>
        </div>
    );
};

export default Update;
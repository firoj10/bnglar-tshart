import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tSharts = useLoaderData();
    return (
        <div>
            <h1>home{tSharts.length}</h1>
        </div>
    );
};

export default Home;
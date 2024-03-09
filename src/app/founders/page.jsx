import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-700">Welcome Founders!</h1>
            <p className="text-lg text-gray-700 mb-4">This is your homepage. Here you can find all the information you need.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Register</button>
        </div>
    );
}

export default HomePage;

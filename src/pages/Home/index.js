import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>Welcome to homepage!</h1>
            <Link to="/meals">
                <button type="button">
                    Click Me!
                </button>
            </Link>
        </div>
    );
}

export default Page;
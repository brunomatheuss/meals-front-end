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
            <Link to="/meal">
                <button type="button">
                    Click Me2!
                </button></Link>
        </div>
    );
}

export default Page;
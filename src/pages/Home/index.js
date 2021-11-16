import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Page = () => {
    return (
        <div className = "index">
            <b><font size = "20">Welcome to homepage!</font></b>
            <br/>
            <Link to="/meals">
                <button className="btn first" type="button">
                    Click here to go to meal list!
                </button>
            </Link>
        </div>
    );
}

export default Page;
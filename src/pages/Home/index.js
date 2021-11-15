import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div class = "index">
            <b><font size = "20">Welcome to homepage!</font></b>
            <br/>
            <Link to="/meals">
                <button class="btn first" type="button">
                    Go to meal list!
                </button>
            </Link>
        </div>
    );
}

export default Page;
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Meals from './pages/Meals/meals';
import Home from './pages/Home';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/meals" element={<Meals/>}/>
        </Routes>    
    )
}
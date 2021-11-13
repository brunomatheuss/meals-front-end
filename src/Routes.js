import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Meals from './pages/Meals/meals';
import Meal from './pages/Meals/meal';
import Home from './pages/Home';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/meals" element={<Meals/>}/>
            <Route exact path="/meals/:strMeal" render={(props) => 
                <Meal {...props} />
            }/>
        </Routes>    
    )
}
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Meals from './pages/Meals/meals';
import Meal from './pages/Meals/meal';
import Home from './pages/Home';

export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/meals" component={Meals}/>
            <Route path="/meals/:strMeal" component={Meal}/>
        </Switch> 
        </BrowserRouter>   
    )
}
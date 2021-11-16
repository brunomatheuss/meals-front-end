import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import Meals from './pages/Meals/meals';
import Meal from './pages/Meals/meal';

export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to="/meals" /></Route>
            <Route exact path="/meals" component={Meals}/>
            <Route path="/meals/:strMeal" component={Meal}/>
        </Switch> 
        </BrowserRouter>   
    )
}
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';



class Meal {

    state = {
        meal: []
    };
    
    componentDidMount() {
        var {strMeal} = this.props.match;
        console.log(strMeal);
        fetch('https://demo-meals-api.herokuapp.com/v1/meals/' + strMeal.strMeal)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meal: res
                });
            });
    }
    render(){
        return (
            <div>
                <h1>Meals</h1>
                <br /><br />
                <img src={this.state.meal.strMealThumb} width="100" height="110" />
                <p><b>Nome:</b> {this.state.meal.strMeal}</p>
                <p><b>Categoria:</b> {this.state.meal.strCategory}</p>
            </div>
        );
    }
    
}

export default Meal;
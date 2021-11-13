import React, { Component, useState } from 'react';

class Meals extends React.Component {
    state = {
        meals: [],
        filtro: '',
    };

    

    componentDidMount() {
        fetch('https://demo-meals-api.herokuapp.com/v1/meals')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meals: res.meals
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Meals</h1>
                <br/><br/>
                <input type="text" value={this.state.filtro} onChange={(ev) => this.setState({
                    filtro: ev
                })}></input>
                <br/><br/>
                <ul>
                    {this.state.meals.map(item => (
                        <li key={item.idMeal}>
                            <img src={item.strMealThumb} width="100" height="110" />
                            <p><b>Nome:</b> {item.strMeal}</p>
                            <p><b>Categoria:</b> {item.strCategory}</p>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Meals;
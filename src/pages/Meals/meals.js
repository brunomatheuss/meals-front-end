import React, { Component } from 'react';

class Meals extends React.Component {
    state = {
        meals: [],
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

                <ul>
                    {this.state.meals.map(item => (
                        <li key={item.idMeal}>
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
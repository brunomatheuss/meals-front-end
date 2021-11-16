import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../../gif/loading.gif';
import Card from '../../Cards/CardUI';
import '../../index.css';

class Meals extends Component {

    state = {
        meals: [],
        filtro: '',
        loading: true,
        filteredMeals: []
    };

    componentDidMount() {
        fetch('https://demo-meals-api.herokuapp.com/v1/meals')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meals: res.meals,
                    filteredMeals: res.meals,
                    loading: false
                });
            });
    }

    render() {

        if (this.state.loading) {
            return (
                <div className="img">
                    <img width="50" height="60" src={loading} />
                </div>
            );
        }

        return (
            <div>
                <br />
                <div className='center'>
                    <b>Search meal</b>
                    <br />
                    <input type="text" onChange={(e) => {
                        this.setState({
                            filtro: e.target.value,
                            filteredMeals: this.state.meals.filter((meal) => meal.strMeal.toLowerCase().startsWith(e.target.value.toLowerCase()))
                        });
                        if(e.target.value == ''){
                            this.setState({
                                filteredMeals: this.state.meals,
                            })
                        }
                    }}></input>
                    <br />
                    {this.state.filteredMeals.map(item => (
                        <div key={item.idMeal}>
                            <Card imgsrc={item.strMealThumb} name={item.strMeal} category={item.strCategory} showButton='true' />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Meals;
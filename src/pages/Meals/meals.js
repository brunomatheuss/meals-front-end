import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../../gif/loading.gif'
class Meals extends React.Component {
    state = {
        meals: [],
        filtro: '',
        loading: true
    };



    componentDidMount() {
        fetch('https://demo-meals-api.herokuapp.com/v1/meals')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meals: res.meals,
                    loading: false
                });
            });
    }

    render() {

        if(this.state.loading){
            return(
                <div class="img">
                <img width="50" height="60" src={loading} />
                </div>
            );
        }

        return (
            <div>
                <br/>
                <b>Search meal</b>
                <br/>
                <input type="text" onChange={(e) => this.setState({
                    filtro: e.target.value
                })}></input>
                <Link to={'/meals/' + this.state.filtro}>
                <button type="button">
                    Search
                </button></Link>
                <br/><br/>
                <ul>
                    {this.state.meals.map(item => (
                        <li key={item.idMeal}>
                            <img class = "meals" src={item.strMealThumb} width="100" height="110" />
                            <p><b>Nome:</b> {item.strMeal}</p>
                            <p><b>Categoria:</b> {item.strCategory}</p>
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Meals;
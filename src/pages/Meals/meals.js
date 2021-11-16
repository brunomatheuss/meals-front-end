import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import loading from '../../gif/loading.gif';
import Card from '../../Cards/CardUI';
import '../../index.css';

class Meals extends Component {
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
                    <input type="text" onChange={(e) => this.setState({
                        filtro: e.target.value
                    })}></input>
                    <Link to={'/meals/' + this.state.filtro}>
                        <button type="button">
                            Search
                </button></Link>
                <br/>
                    {this.state.meals.map(item => (
                        <div key={item.idMeal}>
                        <Card imgsrc={item.strMealThumb} name={item.strMeal} category={item.strCategory} instructions={item.strInstructions} />
                        </div>
                    ))};
                </div>
            </div>
        );
    }
}

export default Meals;
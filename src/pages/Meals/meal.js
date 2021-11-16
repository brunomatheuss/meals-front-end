import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loading from '../../gif/loading.gif';
import Card from '../../Cards/CardUI';
import '../../index.css';

class Meal extends Component {

    state = {
        meal: [],
        loading: true
    };


    async componentDidMount() {
        var { strMeal } = this.props.match.params;
        console.log(strMeal);
        await fetch('https://demo-meals-api.herokuapp.com/v1/meals/' + strMeal)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meal: res,
                    loading: false,
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

        if (this.state.meal.status == 500) {
            return (
                <div className="index">
                    <b><font size="20">Meal not found.. :(</font></b>
                </div>

            );
        }

        return (

            <div>
                <br />
                <div className='center'>
                    <Link to={'/meals'}>
                        <button className="btn btn-outline-danger" type="button">
                            Go back
                </button></Link>
                    <div key={this.state.meal.idMeal}>
                        <Card imgsrc={this.state.meal.strMealThumb} name={this.state.meal.strMeal} category={this.state.meal.strCategory} instructions={this.state.meal.strInstructions} showButton='false' />
                    </div>
                </div>
            </div>
        );
    }

}

export default Meal;
import React, { Component } from 'react';
import loading from '../../gif/loading.gif'

class Meal extends Component{

    state = {
        meal: [],
        loading: true
    };
    
    
    async componentDidMount() {
        var {strMeal} = this.props.match.params;
        console.log(strMeal);
        await fetch('https://demo-meals-api.herokuapp.com/v1/meals/' + strMeal)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    meal: res,
                    loading: false
                });
            });
    }
    
    render(){

        if(this.state.loading){
            return(
                <div class="img">
                <img width="50" height="60" src={loading} />
                </div>
            );
        }

        return (
            <div>
                <b>Details</b>
                <br /><br />
                <img class = "meals" src={this.state.meal.strMealThumb} width="100" height="110" />
                <p><b>Nome:</b> {this.state.meal.strMeal}</p>
                <p><b>Categoria:</b> {this.state.meal.strCategory}</p>
            </div>
        );
    }
    
}

export default Meal;
import React from 'react';
import './card-style.css';

const Card = props =>{
    return(
        <div className='card'>
            <br/>
            <div>
                <img src = {props.imgsrc} height='250' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.name}</h4>
                <b>Category: </b>
                {props.category}
                <br/>
                <b>Cooking instructions: </b>
                {props.instructions}
            </div>
        </div>
    );
};

export default Card;
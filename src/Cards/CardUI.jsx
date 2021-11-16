import React from 'react';
import './card-style.css';
import { Link } from 'react-router-dom';

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
                {props.instructions ? 
                <div>
                    <b>Cooking instructions: </b>
                    {props.instructions}
                </div>
                : <br/>}
            {   
               props.showButton == 'true' ? <Link to={'/meals/' + props.name}>
                <button className="btn btn-outline-success" type="button">
                   See more
                </button></Link>  : ''  
            }                
            </div>
        </div>
    );
};

export default Card;
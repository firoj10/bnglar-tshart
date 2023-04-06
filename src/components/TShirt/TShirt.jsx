import React from 'react';
import './TShirt.css'

const TShirt = ({tshart, handleAddToCart}) => {
    const {picture, name, price} = tshart;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshart)}>Buy Now</button>
        </div>
    );
};

export default TShirt;
import React from 'react'
import '../styles/index.scss'

export const ProductCard = (props) => {
    const _image = props.image ? <img className="productCard-image" src={props.image} alt="image" /> : null
    const _name = props.name ? <span className="productCard-name">{props.name}</span> : null
    const _price = props.price ? <span className="productCard-price">$ {props.price}</span> : null

    return (
        <div className={`productCard ${props.className}`} >
            {_image}
            {_name}
            {_price} 
        </div>
    );
};
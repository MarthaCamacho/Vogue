import React from 'react';
import '../styles/index.scss'
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';
import { ProductCard } from './ProductCard';

export const ProductBlock = (props) => {
    const card = props.cards;
    console.log("Prueba", card)
    return (
        <div className="pure-g productBlock">
            {card.map((cardItem) =>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"><ProductCard {...cardItem} /></div>
            )}
        </div>
    );
};

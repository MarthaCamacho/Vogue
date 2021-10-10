import React from 'react';
import '../styles/index.scss';

export const TrendingItems = () => {
    return (
        <div className="trendingItems">
            <div className="trendingItems-content" >
                <img className="trendingItems-image" src="trending1.jpg" alt="image" />
                <h3 className="trendingItems-title">Beauty</h3>
                <h5 className="trendingItems-subtitle">Blush bar</h5>
            </div>
        </div>
    );
};

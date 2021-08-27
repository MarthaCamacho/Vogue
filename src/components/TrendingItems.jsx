import React from 'react';
import '../src/styles/index.scss';

const TrendingItems = () => {
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

export default TrendingItems;
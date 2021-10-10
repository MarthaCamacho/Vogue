import React from 'react'
import '../styles/index.scss';

export const Section = () => {
    return (
        <div className="section">
            <div className="section-content" >
                <img className="section-image" src="firstSection2.jpg" alt="image" />
                <h3 className="section-title">Beauty</h3>
            </div>
            <div className="section-content" >
                <img className="section-image" src="firstSection1.jpg" alt="image" />
                <h3 className="section-title">Care</h3>
            </div>
            <div className="section-content" >
                <img className="section-image" src="firstSection3.jpg" alt="image" />
                <h3 className="section-title">Style</h3>
            </div>
        </div>
    );
};

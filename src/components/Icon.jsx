import React from 'react'
import PropTypes from 'prop-types';
import '../styles/index.scss';

export const Icon = ({iconUrl}) => {
    return (
        <img className="icon" src={iconUrl}/>
    );
};

Icon.propTypes = {
    iconUrl: PropTypes.string
  };
  
  Icon.defaultProps = {
    iconUrl: null,
  };
  
import React from 'react'
import PropTypes from 'prop-types';
import '../styles/nav.scss';

export const Nav = ({itemsNav}) => {
    return (
        <nav className='nav'>
            <ul className='nav-unorderedList'>
                {itemsNav.map(items => (
                    <li className='nav-itemList'>
                        <a href={items.linkItem}>{items.item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    itemsNav: PropTypes.array
  };
  
  Nav.defaultProps = {
    itemsNav: null,
  };
  

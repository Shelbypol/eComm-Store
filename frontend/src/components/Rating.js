import React from 'react';
import PropTypes from 'prop-types'

//       Rating takes in text and value props from Poduct.js (in a deconstructed structure)
//       Ternerary operator for each star with font awesome icons */
//       If text show it if not dont.. can use ternerary operator  text ? text : ''  or double && since there is nothing in the else just an empty string  *
//       You can specify prop types (all of these props are strings)
const Rating = ({value, text, color}) => {
    return (
        <div className='rating'>
        <span>
                <i style={{color: color}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i style={{color: color}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i style={{color: color}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i style={{color: color}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i style={{color: color}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>{text && text}</span>

        </div>
    )
};

// for a default prop value
Rating.defaultProps = {
    color: '#f8e825',
};

// Specify what type of prop to be received. This will type check our props
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Rating
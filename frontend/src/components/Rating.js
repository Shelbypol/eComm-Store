import React from 'react';


//       Rating takes in text and value props from Poduct.js (in a deconstructed structure)
//         /* Ternerary operator for each star with font awesome icons */
//        /* If text show it if not dont.. can use ternerary operator  text ? text : ''  or double && since there is nothing in the else just an empty string  *
const Rating = ({value, text, descrip}) => {
    return (
        <div className='rating'>
        <span>
                <i className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>
                <i className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}> </i>
            </span>
            <span>{text && text}</span>
            <span>{descrip && descrip}</span>

        </div>
    )
}

export default Rating
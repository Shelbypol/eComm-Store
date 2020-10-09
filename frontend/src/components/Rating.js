import React from 'react';


// Rating takes in text and value props from Poduct.js (in a deconstructed structure)
        {/* Ternerary operator for each star with font awesome icons */}
const Rating = ({value, text}) => {
    return (
    <div className='rating'>
        {/* star 1 */}
        <span>
                <i className={
                    value >= 1
                        ? 'fas fa-star'
                        : value >= 0.5
                        ? 'fas-fa-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
        {/* star 2 */}
        <span>
                <i className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                        ? 'fas-fa-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
        {/* star 3 */}
        <span>
                <i className={
                    value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                        ? 'fas-fa-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
        {/* star 4 */}
        <span>
                <i className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                        ? 'fas-fa-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
        {/* star 5 */}
        <span>
                <i className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                        ? 'fas-fa-half-alt'
                        : 'far fa-star'
                }></i>
            </span>
        {/* If text show it if not dont can use ternerary operator  text ? text : ''  or double && since there is nothing in the else just an empty string  */}
        <span>{text && text }</span>

    </div>
)
}

export default Rating
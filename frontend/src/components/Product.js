import React from 'react';
import { Card } from 'react-bootstrap'

// access props (product._id and product.image) through the ({ product )} in the function param
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
        </Card>
    )
}

export default Product
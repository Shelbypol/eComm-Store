import React from 'react';
import { Card } from 'react-bootstrap'
import Rating from './Rating'

// access props (product._id and product.image) through the ({ product )} in the function param
const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </a>
                <Card.Text as='div'>
                    {/* taking in two props value and text */}
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                        {product.rating} from {product.numReviews} reviews
                    </Rating>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
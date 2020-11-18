import React from 'react';
//import Link for Router
import { Link  } from 'react-router-dom'
import {Button, Card, ListGroup} from 'react-bootstrap'
import Rating from './Rating'
import {useSelector} from "react-redux";

// access props (product._id and product.image) through the ({ product )} in the function param
const Product = ({ product, history, productId }) => {

    //HANDLERS
    const addToCartHandler = () => {
        console.log(product._id);
        history.push(`/cart/${productId}?qty=1`);
    };


    return (
        <Card className='my-3 p-3 rounded'>
            {/* Replace 'a' tags with Link from router and href is replaced with 'to'*/}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    {/* taking in two props value and text (talking with Rating component) */}
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                        {product.rating} from {product.numReviews} reviews}
                    </Rating>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}

                </Card.Text>
                <Card.Text>
                    <Button
                        onClick={addToCartHandler}
                        className='btn btn-block'
                        type='button'
                        // disabled={product.countInStock === 0 }
                    >
                        ADD TO CART
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
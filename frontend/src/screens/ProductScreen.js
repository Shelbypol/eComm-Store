// use state for component level state
import React, {useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

// import products from "../products";
// import axios from 'axios'

// ================ BEFORE REDUX
// const ProductScreen = ({ match }) => {
//
//     const [product, setProduct] = useState({});
//
//     useEffect(() => {
//        const fetchProduct = async () => {
//            // find with props.match (already deconstructed)
//            const { data } = await axios.get(`/api/products/${match.params.id}`);
//             setProduct(data)
//        };
//     //   call fetchProduct
//         fetchProduct()
//     }, [match]);

    // Using destructured prop above 'match' to match params of url Id that user clicked on
    // *del (temp set up):
    // const setProduct = products.find((p) => p._id === match.params.id)

    // ============== REDUX IMPLEMENTED

const ProductScreen =({ history, match }) => {
    const [ qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const{ loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match ]);

    //HANDLERS
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    };

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go back
            </Link>
            { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

            <Row>
                <Col className='product-page-section' md={6}>
                    {/* image component from react bootstrap */}
                    {/* 'fluid' forces the image to stay in it's container */}
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col className='product-page-section' md={3}>
                    {/* variant flush takes away the border */}
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {/* Rating takes in value text so must add them in order for rating to work (props) */}
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className='product-page-section' md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col className='product-page-section'>
                                        Status
                                    </Col>
                                    <Col className='product-page-section'>
                                        {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col className='product-page-section'>Qty</Col>
                                        <Col className='product-page-section'>
                                            <Form.Control
                                                style={{width: '85%'}}
                                                as='select'
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                               <Button
                                   onClick={addToCartHandler}
                                   className='btn btn-block'
                                   type='button'
                                   disabled={product.countInStock === 0 }
                               >
                                   ADD TO CART
                               </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}

            </>
    )
};

export default ProductScreen
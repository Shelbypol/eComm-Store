import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Button, Row, Col, ListGroup, Image, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getOrderDetails} from "../actions/orderActions";

const OrderScreen = ({match}) => {
    const orderId = match.params.id;

    const dispatch = useDispatch();

    const orderDetails = useSelector(state => state.orderCreate);
    const {order, loading, error} = orderDetails;

    if (!loading) {
        // CALCULATE PRICES
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        };
        order.itemsPrice = addDecimals(
            order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
    }


    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, []);


    return loading ? <Loader/>
        : error
            ? <Message variant='danger'>{error}</Message>
            : <>


                <h1 className='inline'>Order # </h1>
                <h4 className='inline'> {order._id}</h4>
                <Row>
                    <Col me={8}>
                        <ListGroup>
                            <ListGroup.Item variant='flush'>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong>
                                    {order.user.name}
                                </p>
                                <p>
                                    <strong>Email: </strong>
                                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                                </p>
                                <p>
                                    <strong>Address: </strong>
                                    <br/>
                                    <p style={{marginLeft: '1em'}}>
                                        {order.shippingAddress.address},<br/>
                                        {order.shippingAddress.city},<br/>
                                        {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                                    </p>
                                </p>
                                {order.isDelivered ? (
                                    <Message variant='success'>Delivered on {order.deliverdAt}</Message>
                                ) : (
                                    <Message variant='danger'>Not Delivered</Message>
                                )}
                            </ListGroup.Item>

                            {/* PAYMENT METHOD */}
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {order.paymentMethod}
                                </p>
                                {order.isPaid ? (
                                    <Message variant='success'>Paid on {order.paidAt}</Message>
                                    ) : (
                                    <Message variant='danger'>Not paid</Message>
                                )}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0
                                    ? <Message>Order is empty</Message>
                                    : (
                                        <ListGroup variant='flush'>
                                            {order.orderItems.map((item, index) => (
                                                <ListGroup.Item key={index}>
                                                    <Row>
                                                        <Col md={1}>
                                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                                        </Col>
                                                        <Col>
                                                            <Link to={`/product/${item.product}`}>
                                                                {item.name}
                                                            </Link>
                                                        </Col>
                                                        <Col md={4}>
                                                            {item.qty} x $ {item.price} = $ {item.qty * item.price}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    {/* ORDER SUMMARY */}
                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Order Summary</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Items</Col>
                                        <Col>$ {order.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* SHIPPING */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Shipping</Col>
                                        <Col>$ {order.shippingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* TAX */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tax</Col>
                                        <Col>$ {order.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* TOTAL */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>$ {order.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </>
};

export default OrderScreen
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getOrderDetails} from "../actions/orderActions"

const ThankYouScreen = ({history, match}) => {
    const orderId = match.params.id;
    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);
    const {order, loading, error} = orderDetails;

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(getOrderDetails(orderId))
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo]);

    return (
        <>
            <h1>Thank you for your order!</h1>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                : (
                    <>
                        <div>
                            <h4> Your order confirmation: {order._id}</h4>

                            <h4>Paid on: {order.paidAt.substring(0, 10)}</h4>
                        </div>
                    </>
                )
            }
        </>
    )
};

export default ThankYouScreen
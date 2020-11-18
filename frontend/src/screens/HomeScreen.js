import React, { useEffect } from 'react'
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import Paginate from '../components/Paginate'
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = ({ match }) => {

    window.onbeforeunload = () => {
        // Clear the local storage
       localStorage.clear()
    };

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    // using hook
    const dispatch = useDispatch();

    // useSelector retrieves items from state
    const productList = useSelector(state => state.productList);
    const { loading, error, products, pages, page } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    },[dispatch, keyword, pageNumber]);

    return (
        <>
        <Meta title='Proshop | Home' />

            {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Back</Link>}

            <h1>Latest Products</h1>
            {loading ?
                ( <Loader/> )
                : error ?
                    ( <Message variant='danger'>{error}</Message> )
                : (
                <>
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                <Row>
                    {/* Map is telling it to loop through each product where it is then bringing in the product component to know how to display each one */}
                    {/* When you map out items like this to create a list each element needs to have a key and that needs to be unique */}
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                </>
                    )
            }
        </>
    )
};

export default HomeScreen;
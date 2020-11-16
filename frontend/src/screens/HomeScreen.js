
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
// import axios from 'axios'
// =========== means starting code before redux

// ===============const HomeScreen = () =>  {
    // =========== const [products, setProducts] = useState([]);
    // Use effect hook (make sure to import it)
    // in hook is where we make axios request (axios was installed in the front end with npm i axios
    // axios is same thing as fetch api but cleaner http req to our backend to get product info
    // ===========  useEffect(() => {
        // returns a promise so could add .then(res but he uses asyn await which requires separate function rather than the syntax on line 14
        // axios.get('/api/products').then(res...
        // * ================ const fetchProducts = async () => {
        // res has a data object attached to it that we have access to it so we can destructure const res to const {data} to use data directly
        //    need to add a proxy in the front end package.json to tell it to look at port 5000 not 3000 (line 3 in package.json adds a loop back address pointing to 5000)
        //
        //     * ============== const { data } = await axios.get('/api/products');

            //change state from empty array to hold data
            // * ============== setProducts(data)
        // };
        // =============fetchProducts()
    //    add dependencies in empty array to fire off useEffect with additional
    // }, []);

    // ============================= redux implementation ==================
const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword;
    // using hook
    const dispatch = useDispatch();

    // useSelector retrieves items from state
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword));
    },[dispatch, keyword]);

    return (
        <>
            <h1>Latest Products</h1>
            {loading ?
                ( <Loader/> )
                : error ?
                    ( <Message variant='danger'>{error}</Message> )
                : (
                <Row>
                    {/* Map is telling it to loop through each product where it is then bringing in the product component to know how to display each one */}
                    {/* When you map out items like this to create a list each element needs to have a key and that needs to be unique */}
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
                    )
            }
        </>
    )
};

export default HomeScreen
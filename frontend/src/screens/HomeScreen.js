import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () =>  {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {/* Map is telling it to loop through each product where it is then bringing in the product component to know how to display each one */}
                {/* When you map out items like this to create a list each element needs to have a key and that needs to be unique */}
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
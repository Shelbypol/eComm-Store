// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
import React from 'react';
// react router Browser use as to create alias refering to it as Router, also import Route to create unique routes
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegsiterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
    return (
        // wrap everything in the Browser router
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    {/* declare route, assign path and what component that path goes to and then 'exact' which means the path must match exactly */}
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen}/>
                    <Route path='/product/:id' component={ProductScreen}/>
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/placeorder' component={PlaceOrderScreen} />
                    <Route path='/order/:id' component={OrderScreen} />
                    <Route path='/admin/userlist' component={UserListScreen} />
                    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
                    <Route path='/admin/productlist' component={ProductListScreen} />
                    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
                    <Route path='/admin/orderlist' component={OrderListScreen} />
                    <Route path='/search/:keyword' component={HomeScreen} />
                    <Route path='/page/:pageNumber' component={HomeScreen} exact />
                    <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer/>
        </Router>
    );
};

export default App;

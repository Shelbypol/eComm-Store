// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
import React from 'react';
// react router Browser use as to create alias refering to it as Router, also import Route to create unique routes
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer";
// bring in screens to be routed
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
    return (
        // wrap everything in the Browser router
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    {/* declare route, assign path and whht component that path goes to and then 'exact' which means the path must match exactly */}
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/product' component={ProductScreen} exact/>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;

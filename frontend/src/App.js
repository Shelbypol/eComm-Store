// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <h1>Welcome to ProShop</h1>
                </Container>
            </main>
            <Footer/>
        </>
    );
}

export default App;

// export as default means when we import on App.js we dont need to wrap in curly brackets ie: import {Header} is now import Header
import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <>
            <Header/>
            <main className='py-3'>
                <Container>
                   <HomeScreen/>
                </Container>
            </main>
            <Footer/>
        </>
    );
}

export default App;

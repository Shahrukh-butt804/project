// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './sections/Home';
import About from './sections/About';
import LoanProducts from './sections/LoanProducts';
import ApplyNow from './sections/ApplyNow';
import "./App.css"
import WhoWeFund from './sections/WhoWeFund';
import HowItWorks from './sections/HowItWork';
import Requirements from './sections/Requirements';
import Footer from './components/Footer';

function App() {
    const [showPage, setShowPage] = useState(false)
    return (
        <>

            {showPage ?
                <ApplyNow setShowPage={setShowPage} />
                :
                <>
                    <Navbar />
                    <Home setShowPage={setShowPage} />
                    <WhoWeFund />
                    <HowItWorks />
                    <About />
                    <LoanProducts />
                    <Requirements />    
                    <Footer /> 
                </>}


        </>
    );
}

export default App;

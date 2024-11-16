import React, { createContext, useState } from 'react'
import Popup from '../components/Popup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalculatorContainer from '../components/calc/CalculatorContainer';
import Carousel from '../components/Carousel';

export const ModalContext = createContext();

const Landing = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <div className='main_container'>
                <Header />
                <Carousel />
                <CalculatorContainer />
                <Popup />
                <Footer />
            </div>
        </ModalContext.Provider>
    )
}

export default Landing
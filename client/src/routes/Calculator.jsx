import React, { useState } from 'react'
import { ModalContext } from './Landing';
import Header from '../components/Header';
import Popup from '../components/Popup';
import Footer from '../components/Footer';
import CalculatorContainer from '../components/calc/CalculatorContainer';

const Calculator = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <div className='main_container'>
                <Header />
                <CalculatorContainer />
                <Popup />
                <Footer />
            </div>
        </ModalContext.Provider>
    )
}

export default Calculator
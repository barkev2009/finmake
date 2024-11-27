import React, { createContext, useState } from 'react'
import Popup from '../common/Popup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalculatorContainer from '../screens/CalculatorContainer';
import AboutUs from '../screens/AboutUs';
import Sectors from '../screens/SectorContainer';
import ServicesContainer from '../screens/ServicesContainer';
import WorkSteps from '../screens/WorkSteps';

export const ModalContext = createContext();

const Landing = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <div className='main_container'>
                <Header />
                <AboutUs />
                <ServicesContainer />
                <Sectors />
                <WorkSteps />
                <CalculatorContainer />
                <Popup />
                <Footer />
            </div>
        </ModalContext.Provider>
    )
}

export default Landing
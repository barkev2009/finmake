import React, { createContext, useState } from 'react'
import Popup from '../components/Popup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

export const ModalContext = createContext();

const Landing = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <div className='main_container'>
                <Header />
                <Content />
                <Popup />
                <Footer />
            </div>
        </ModalContext.Provider>
    )
}

export default Landing
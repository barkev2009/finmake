import React, { createContext, useState } from 'react'
import Popup from '../components/Popup';
import PopupButton from '../components/PopupButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const ModalContext = createContext();

const Landing = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <div className='main_container'>
                <Header />
                <PopupButton />
                <Popup />
                <Footer />
            </div>
        </ModalContext.Provider>
    )
}

export default Landing
import React, { createContext, useState } from 'react'
import Popup from '../components/Popup';

export const ModalContext = createContext();

const Landing = () => {

    const [active, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ active, setActive }}>
            <button onClick={() => setActive(!active)}>CLICK ME</button>
            <Popup />
        </ModalContext.Provider>
    )
}

export default Landing
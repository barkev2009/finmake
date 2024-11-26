import React, { useContext } from 'react'
import { ModalContext } from '../routes/Landing';

const PopupButton = () => {

    const { active, setActive } = useContext(ModalContext);
    return (
        <button className='popupBtn' onClick={() => setActive(!active)}>Обратный звонок</button>
    )
}

export default PopupButton
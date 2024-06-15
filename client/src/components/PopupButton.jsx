import React, { useContext } from 'react'
import { ModalContext } from '../routes/Landing';
import styles from '../css/PopupButton.module.css'

const PopupButton = () => {

    const { active, setActive } = useContext(ModalContext);
    return (
        <button className={styles.popupBtn} onClick={() => setActive(!active)}>Заказать звонок</button>
    )
}

export default PopupButton
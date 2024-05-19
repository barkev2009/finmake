import React, { useContext, useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { createCreateRequestAPI } from '../www/callRequestAPI';
import { ModalContext } from './Landing';

const Popup = () => {

    const { active, setActive } = useContext(ModalContext);

    const [name, setName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [disabled, setDisabled] = useState(true);

    const buttonHandler = () => {
        setActive(false);
        createCreateRequestAPI({ name, phone_number });
        setName('');
        setPhoneNumber('');
    }
    useEffect(
        () => {
            setDisabled(name === '' || phone_number === '')
        }, [name, phone_number]
    );

    return (
        <Modal active={active} setActive={setActive}>
            <h1>Buy our shit!</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
            <button disabled={disabled} onClick={buttonHandler}>SEND</button>
        </Modal>
    )
}

export default Popup
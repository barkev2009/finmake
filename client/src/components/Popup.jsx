import React, { useContext, useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { createCreateRequestAPI } from '../www/callRequestAPI';
import { ModalContext } from '../routes/Landing';

const Popup = () => {

    const { active, setActive } = useContext(ModalContext);

    const [name, setName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [disabled, setDisabled] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
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
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Введите имя' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Введите номер телефона' value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
                <button type='submit' disabled={disabled} onClick={submitHandler}>SEND</button>
            </form>
        </Modal>
    )
}

export default Popup
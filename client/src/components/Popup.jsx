import React, { useContext, useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { createCreateRequestAPI } from '../www/callRequestAPI';
import { ModalContext } from '../routes/Landing';
import InputMask from 'react-input-mask';

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
            setDisabled(name === '' || phone_number === '' || phone_number.split('_').length > 1)
        }, [name, phone_number]
    );

    return (
        <Modal active={active} setActive={setActive}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Закажите звонок:</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type="text" placeholder='Введите имя' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <InputMask
                            mask="+7 (999) 999-99-99"
                            placeholder="Введите номер телефона"
                            value={phone_number}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        {/* <input type="text" placeholder='Введите номер телефона' value={phone_number} onChange={e => setPhoneNumber(e.target.value)} /> */}
                    </div>
                    <button type='submit' disabled={disabled} onClick={submitHandler}>Заказать</button>
                </form>
            </div>
        </Modal>
    )
}

export default Popup
import React, { useContext, useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { createCreateRequestAPI } from '../www/callRequestAPI';
import { ModalContext } from '../routes/Landing';
import InputMask from 'react-input-mask';
import { timeZones } from '../const';
import getCurrentTime from '../utils/getCurrentTime';

const Popup = () => {

    const { active, setActive } = useContext(ModalContext);

    const [name, setName] = useState('');
    const [timezone, setTimeZone] = useState('UTC+7');
    const [time_start, setStartTime] = useState(getCurrentTime());
    const [time_end, setEndTime] = useState(getCurrentTime());
    const [phone_number, setPhoneNumber] = useState('');
    const [disabled, setDisabled] = useState(true);

    const resetFields = () => {
        setName('');
        setPhoneNumber('');
        setStartTime(getCurrentTime());
        setEndTime(getCurrentTime());
        setTimeZone('UTC+7');
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setActive(false);
        createCreateRequestAPI({ name, phone_number, timezone, time_start, time_end });
        resetFields();
    }
    useEffect(
        () => {
            setDisabled(name === '' || phone_number === '' || phone_number.split('_').length > 1 || time_start.length < 5 || time_end.length < 5)
        }, [name, phone_number, time_start, time_end]
    );
    useEffect(
        () => {
            if (active) {
                setStartTime(getCurrentTime());
                setEndTime(getCurrentTime());
            } else {
                resetFields();
            }
        }, [active]
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
                    </div>
                    <div>
                        <InputMask
                            mask="99:99"
                            placeholder="Начало диапазона"
                            value={time_start}
                            onChange={e => setStartTime(e.target.value)}
                        />
                        <InputMask
                            mask="99:99"
                            placeholder="Конец диапазона"
                            value={time_end}
                            onChange={e => setEndTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <select value={timezone} onChange={e => setTimeZone(e.target.value)} name="timezones" id="timezone-select">
                            {timeZones.map(item => <option key={item.code} value={item.code}>{item.value}</option>)}
                        </select>
                    </div>
                    <button type='submit' disabled={disabled} onClick={submitHandler}>Заказать</button>
                </form>
            </div>
        </Modal>
    )
}

export default Popup
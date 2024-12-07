import React, { useContext, useEffect, useState } from 'react'
import Modal from '../common/Modal'
import { createCreateRequestAPI } from '../www/callRequestAPI';
import { ModalContext } from '../routes/Landing';
import InputMask from 'react-input-mask';
import { TIME_ZONES } from '../const';
import getCurrentTime from '../utils/getCurrentTime';

const Popup = () => {

    const { active, setActive } = useContext(ModalContext);
    const currentTimeZone = `UTC${-(new Date().getTimezoneOffset()) / 60}`

    const [name, setName] = useState('');
    const [timezone, setTimeZone] = useState(currentTimeZone);
    const [time_start, setStartTime] = useState(getCurrentTime());
    const [time_end, setEndTime] = useState(getCurrentTime());
    const [phone_number, setPhoneNumber] = useState('');
    const [disabled, setDisabled] = useState(true);

    const resetFields = () => {
        setName('');
        setPhoneNumber('');
        setStartTime(getCurrentTime());
        setEndTime(getCurrentTime());
        setTimeZone(currentTimeZone);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setActive(false);
        createCreateRequestAPI({ name, phone_number, timezone: TIME_ZONES.filter(i => i.code === timezone)[0].value.split(' ')[0] , time_start, time_end });
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
            <div className='popup'>
                <h3 className='title'>Закажите звонок:</h3>
                <form onSubmit={submitHandler}>
                    <div className="row contacts">
                        <div className='inline-block'>
                            <div className="label">Ваше ФИО</div>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='inline-block'>
                            <div className="label">Номер телефона</div>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                value={phone_number}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row call_range'>
                        <div className="label">Желаемый диапазон времени звонка</div>
                        <div className="ranges">
                            <InputMask
                                mask="99:99"
                                value={time_start}
                                onChange={e => setStartTime(e.target.value)}
                            />
                            <InputMask
                                mask="99:99"
                                value={time_end}
                                onChange={e => setEndTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <div className="label">Часовой пояс</div>
                            <select value={timezone} onChange={e => setTimeZone(e.target.value)} name="timezones" id="timezone-select">
                                {TIME_ZONES.map(item => <option key={item.code} value={item.code}>{item.value}</option>)}
                            </select>
                        </div>
                    </div>
                    <button className='popupBtn' type='submit' disabled={disabled} onClick={submitHandler}>Заказать</button>
                </form>
            </div>
        </Modal>
    )
}

export default Popup
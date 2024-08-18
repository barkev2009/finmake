import React from 'react';
import InfoBlock from './blocks/InfoBlock';
import PersonBlock from './blocks/PersonBlock';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';

const Content = () => {

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: "column", padding: '0 15px' }}>
            <PersonBlock />
            <button onClick={() => { navigate(ROUTES.CALC_ROUTE) }} className='calc_button'>Калькулятор</button>
            <InfoBlock />
        </div>
    )
}

export default Content
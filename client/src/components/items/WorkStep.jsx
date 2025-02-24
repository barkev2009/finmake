import React, { useContext } from 'react'
import HalfCircle from '../../svg/HalfCircle'
import PhoneLink from '../links/PhoneLink'
import { ModalContext } from '../../routes/Landing';

const WorkStep = ({ step }) => {

    const { setActive } = useContext(ModalContext);

    return (
        <div className='step'>
            <div className="figure">
                <div className="ellipse"></div>
                <HalfCircle />
                <div className="label">
                    шаг
                    <br />
                    {step.number}
                </div>
            </div>
            {step.number === '02' ?
                <div className="step_description"><a onClick={() => setActive(prev => !prev)} >{step.descr[0]}</a>{step.descr[1]}
                {/* <PhoneLink /> */}
                {step.descr[2]}</div>
                : <div className="step_description">{step.descr}</div>
            }
        </div>
    )
}

export default WorkStep
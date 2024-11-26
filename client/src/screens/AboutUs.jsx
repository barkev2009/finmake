import React from 'react';
import aboutUsSrc from '../img/aboutUs.png'
import PopupButton from '../common/PopupButton';
import { navigateToId } from '../utils/navigate';

const AboutUs = () => {

    return (
        <div id='about_us'>
            <div className="about_us_container">
                <div className="about_us_block">
                    <div className="about_us_content">
                        <h2>Избавим от <span style={{ color: 'var(--main_color)' }}>хлопот</span> с налоговой</h2>
                        <h3>Приведем ваши <span style={{ color: 'var(--main_color)' }}>цифры</span> в порядок</h3>
                        <div className="buttons_block">
                            <button onClick={() => navigateToId('calculator_container')} className='calculator_button'>Калькулятор</button>
                            <PopupButton />
                        </div>
                    </div>
                    <img src={aboutUsSrc} alt="about_us" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
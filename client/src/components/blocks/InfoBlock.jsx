import React from 'react'
import Carousel from '../Carousel';

const InfoBlock = () => {
    return (
        <div style={{display: 'flex'}}>
            <Carousel />
            <h2 style={{ width: '50%' }}>
                Мы предлагаем вам комплексное бухгалтерское
                сопровождение вашей организации, которое имеет
                ряд стоимостных и качественных преимуществ
                по сравнению с наймом собственного бухгалтера.
            </h2>
        </div>
    )
}

export default InfoBlock
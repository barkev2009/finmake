import React from 'react'
import Carousel from '../Carousel';

const InfoBlock = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
            <Carousel />
            <h2 style={{ flex: '2 1 0' }}>
                Мы предлагаем вам комплексное бухгалтерское
                сопровождение вашей организации, которое имеет
                ряд стоимостных и качественных преимуществ
                по сравнению с наймом собственного бухгалтера.
            </h2>
        </div>
    )
}

export default InfoBlock
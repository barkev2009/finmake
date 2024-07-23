import React from 'react'
import Carousel from '../Carousel';

const InfoBlock = () => {
    return (
        <div className='info_container'>
            <h2 className='carousel_h2'>
                Мы предлагаем вам комплексное бухгалтерское
                сопровождение вашей организации, которое имеет
                ряд стоимостных и качественных преимуществ
                по сравнению с наймом собственного бухгалтера.
            </h2>
            <Carousel />
        </div>
    )
}

export default InfoBlock
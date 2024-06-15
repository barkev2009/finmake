import React from 'react';
import Carousel from './Carousel';

const Content = () => {
    return (
        <div style={{display: 'flex', flexDirection: "row", padding: '0 15px'}}>
            <Carousel />
            <h2 style={{flex: '2 1 0'}}>
                Мы предлагаем вам комплексное бухгалтерское
                сопровождение вашей организации, которое имеет
                ряд стоимостных и качественных преимуществ
                по сравнению с наймом собственного бухгалтера.
            </h2>
        </div>
    )
}

export default Content
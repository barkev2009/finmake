import React from 'react'
import ServiceIconGetter from '../../svg/services/ServiceIconGetter'

const CarouselItem = ({ item, idx }) => {
    return (
        <div id={`c${idx + 1}`} key={idx} className='carousel-item'>
            <div className="title-block">
                <div className="icon"><ServiceIconGetter code={item.id} /></div>
                <h3>{item.title}</h3>
            </div>
            <ul>
                {
                    item.itemPoints.map(
                        (point, idx) => <li key={idx}>{point}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CarouselItem
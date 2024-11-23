import React from 'react'

const CarouselItem = ({ item, idx }) => {
    return (
        <div id={`c${idx + 1}`} key={idx} className='carousel-item'>
            <div className="title-block">
                <div className="icon"></div>
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
import React, { useRef } from 'react'
import { carouselItems } from '../const';

const Carousel = () => {

    const currentIndex = useRef(0);

    function goToSlide(index) {
        const carouselItems = document.querySelectorAll('.carousel-item');
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        currentIndex.current = index;
        const width = document.querySelector('.carousel-item').clientWidth;
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex.current * width}px)`;
    }

    function goToNextSlide() {
        goToSlide(currentIndex.current + 1);
    }

    function goToPrevSlide() {
        goToSlide(currentIndex.current - 1);
    }

    return (
        <div className='carousel_container'>
            <div className="carousel">
                <div className="carousel-inner">
                    {
                        carouselItems.map(
                            (item, idx) => <div id={`c${idx + 1}`} key={idx} className='carousel-item'>
                                <h3>{item.title}</h3>
                                {
                                    item.itemPoints.map(
                                        (point, idx) => <p key={idx}>{point}</p>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <button onClick={goToPrevSlide}>{'<'}</button>
            <button onClick={goToNextSlide}>{'>'}</button>
        </div>

    )
}

export default Carousel
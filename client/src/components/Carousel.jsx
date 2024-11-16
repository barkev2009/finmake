import React, { useEffect, useRef, useState } from 'react'
import { CAROUSEL_ITEMS } from '../const';

const Carousel = () => {

    const currentIndex = useRef(0);
    const [marker, setMarker] = useState(0);
    const [items, setItems] = useState([CAROUSEL_ITEMS[CAROUSEL_ITEMS.length - 1], ...CAROUSEL_ITEMS.slice(0, 3)]);

    const getCarouselItems = () => {
        let res = [];
        let counter = currentIndex.current - 1;
        if (counter === -1) {
            counter = CAROUSEL_ITEMS.length - 1
        }
        while (res.length < 4) {
            if (counter >= CAROUSEL_ITEMS.length) {
                counter = 0
            }
            res.push(CAROUSEL_ITEMS[counter]);
            counter++
        }
        return res;
    }

    function goToSlide(index) {
        const width = document.querySelector('.carousel-item').clientWidth;
        let sign = 0;

        if (index > currentIndex.current) {
            sign = - 2 * width;
        }
        if (index < 0) {
            index = CAROUSEL_ITEMS.length - 1;
        } else if (index >= CAROUSEL_ITEMS.length) {
            index = 0;
        }
        currentIndex.current = index;
        document.querySelector('.carousel-inner').style.transition = 'all .5s';
        document.querySelector('.carousel-inner').style.transform = `translateX(${sign}px)`;
        setTimeout(
            () => {
                document.querySelector('.carousel-inner').style.transition = 'all 0s';
                setItems(getCarouselItems());
            }, 500
        );
        setMarker(currentIndex.current);
    }

    function goToNextSlide() {
        goToSlide(currentIndex.current + 1);
    }

    function goToPrevSlide() {
        goToSlide(currentIndex.current - 1);
    }

    function markerHandler(index) {
        return function () {
            goToSlide(index);
        }
    }

    // window.addEventListener('resize', function() {
    //     goToPrevSlide();
    //     goToNextSlide();
    // }, true);

    useEffect(
        () => {
            const width = document.querySelector('.carousel-item').clientWidth;
            document.querySelector('.carousel-inner').style.transform = `translateX(-${width}px)`;
        }, []
    );
    useEffect(
        () => {
            const width = document.querySelector('.carousel-item').clientWidth;
            document.querySelector('.carousel-inner').style.transform = `translateX(-${width}px)`;
        }, [items]
    );

    return (
        <div className='carousel_container'>
            <div className="carousel">
                <div className="carousel-inner">
                    {
                        items.map(
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
            {/* <div className='carousel-marker_container'>
                {
                    CAROUSEL_ITEMS.map((item, idx) => <div className={`carousel-marker ${marker === idx ? 'active' : ''}`} onClick={markerHandler(idx)} key={idx}></div>)
                }
            </div> */}
            <button className='carousel_btn left' onClick={goToPrevSlide}>{'<'}</button>
            <button className='carousel_btn right' onClick={goToNextSlide}>{'>'}</button>
        </div>

    )
}

export default Carousel
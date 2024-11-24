import React, { useEffect, useRef, useState } from 'react'
import { CAROUSEL_ITEMS } from '../../const';
import CarouselItem from './CarouselItem';
import CarouselArrow from '../../svg/CarouselArrow';

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
            sign = - 2 * (width + 60);
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
            document.querySelector('.carousel-inner').style.transform = `translateX(-${width + 60}px)`;
        }, []
    );
    useEffect(
        () => {
            const width = document.querySelector('.carousel-item').clientWidth;
            document.querySelector('.carousel-inner').style.transform = `translateX(-${width + 60}px)`;
        }, [items]
    );

    return (
        <div id='carousel_container'>
            <div className="title-block">
                <h3 className='title'>Услуги</h3>
            </div>
            <div className="carousel">
                <CarouselArrow className={'carousel_btn left'} onClick={goToPrevSlide} />
                <div className="carousel_space">
                    <div className="carousel-inner">
                        {
                            items.map(
                                (item, idx) => <CarouselItem key={idx} item={item} idx={idx} />
                            )
                        }
                    </div>
                </div>
                <CarouselArrow className={'carousel_btn right'} onClick={goToNextSlide} />
            </div>
            {/* <div className='carousel-marker_container'>
                {
                    CAROUSEL_ITEMS.map((item, idx) => <div className={`carousel-marker ${marker === idx ? 'active' : ''}`} onClick={markerHandler(idx)} key={idx}></div>)
                }
            </div> */}
        </div>

    )
}

export default Carousel
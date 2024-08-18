import React, { useEffect, useRef } from 'react'

const SliderContainer = ({ length = 5, id, step = 1 }) => {

    const isClicked = useRef(false);
    const isVisible = useRef(document.querySelector(`#${id}.range-body`));
    useEffect(
        () => {
            if (isVisible.current !== undefined) {
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchmove',
                    sliderHandler
                );
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchstart',
                    downHandler
                );
                document.querySelector(`#${id}.range-body`).addEventListener(
                    'touchend',
                    upHandler
                );
            }
        }, isVisible.current
    );

    const setPerc = (current) => {
        const left = document.querySelector(`#${id}.range-body`).getBoundingClientRect().left;
        const right = document.querySelector(`#${id}.range-body`).getBoundingClientRect().right;
        if (current < left) {
            current = left
            isClicked.current = false;
        }
        if (current > right) {
            current = right;
            isClicked.current = false;
        }
        const perc = (current - left) / (right - left) * 100;
        document.querySelector(`#${id} .range-selector`).style.left = `${perc}%`;
    }

    const sliderHandler = (e) => {
        if (isClicked.current) {
            setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
        }
    }
    const downHandler = (e) => {
        isClicked.current = true;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }
    const upHandler = (e) => {
        isClicked.current = false;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }

    return (
        <div id={id} className='range-body' onMouseMove={sliderHandler} onMouseDown={downHandler} onMouseUp={upHandler}>
        {/* <div id={id} className='range-body'> */}
            <div className="range-inner"></div>
            <div className="range-outer"></div>
            <div className="range-selector"></div>
            <div className="slider-line">
                {
                    [...Array(length / step + 1).keys()].map(i => <span key={i}>{i * step}</span>)
                }
            </div>
        </div >
    )
}

export default SliderContainer
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const SliderContainer = ({ length = 5, id, step = 1 }) => {

    const isClicked = useRef(false);
    const [value, setValue] = useState(0);
    const [selectorValue, setSelectorValue] = useState(0);
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
                document.querySelector(`#${id} .range-selector`).addEventListener(
                    'mouseenter',
                    () => {
                        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `100%`;
                    }
                );
                document.querySelector(`#${id} .range-selector`).addEventListener(
                    'mouseleave',
                    () => {
                        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `0%`;
                    }
                );
            }
        }, isVisible.current
    );
    useEffect(
        () => {
            if (selectorValue) {
                document.querySelector(`#${id} .range-selector`).style.left = `${selectorValue}%`;
                document.querySelector(`#${id} .range-outer`).style.width = `${selectorValue}%`;
                if (selectorValue * length / 100 - Math.floor(selectorValue * length / 100) > 0.95) {
                    setValue(Math.floor(selectorValue * length / 100) + 1);
                } else {
                    setValue(Math.floor(selectorValue * length / 100));
                }
            }
        }, [selectorValue]
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
        setSelectorValue((current - left) / (right - left) * 100);
    }

    const sliderHandler = (e) => {
        if (isClicked.current) {
            setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
        }
    }
    const downHandler = (e) => {
        isClicked.current = true;
        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `100%`;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }
    const upHandler = (e) => {
        isClicked.current = false;
        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `0%`;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }

    return (
        <div id={id} className='range-body' onMouseMove={sliderHandler} onMouseDown={downHandler} onMouseUp={upHandler}>
            {/* <div id={id} className='range-body'> */}
            <div className="range-inner"></div>
            <div className="range-outer"></div>
            <div className="range-selector">
                <div className="tooltip">{value}</div>
            </div>
            <div className="slider-line">
                {
                    [...Array(length / step + 1).keys()].map(i => <span style={{ left: `${i * step / length * 100}%`, right: `${i * step === length ? 0 : ''}%` }} key={i}>{i * step}</span>)
                }
            </div>
        </div >
    )
}

export default SliderContainer
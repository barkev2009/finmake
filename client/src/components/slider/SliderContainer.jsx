import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCalcParams } from '../../store/calcSlice';
import { useSliderInitiator } from '../../hooks';

const SliderContainer = ({ length = 5, id, step = 1, name }) => {

    const isClicked = useRef(false);
    const [isDown, setIsDown] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const [selectorValue, setSelectorValue] = useState(0);

    const sliderHandler = (e) => {
        if (isClicked.current) {
            setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
        }
    }
    const downHandler = (e) => {
        setIsDown(true);
        isClicked.current = true;
        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `100%`;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }
    const upHandler = (e) => {
        setIsDown(false);
        isClicked.current = false;
        document.querySelector(`#${id} .range-selector .tooltip`).style.opacity = `0%`;
        setPerc((e.touches !== undefined && e.touches.length > 0) ? e.touches[0].clientX : e.clientX);
    }
    const moveMarker = (position) => {
        document.querySelector(`#${id} .range-selector`).style.left = `${position}%`;
        document.querySelector(`#${id} .range-outer`).style.width = `${position}%`;
    }

    useSliderInitiator({ id, sliderHandler, upHandler, downHandler });

    useEffect(
        () => {
            if (selectorValue) {
                moveMarker(selectorValue);
                const valueCandidate = selectorValue * length / 100;
                if (Math.abs(valueCandidate - Math.floor(valueCandidate)) < 0.5) {
                    setValue(Math.floor(selectorValue * length / 100));
                    dispatch(setCalcParams({ id, value: Math.floor(selectorValue * length / 100) }));
                } else {
                    setValue(Math.ceil(selectorValue * length / 100));
                    dispatch(setCalcParams({ id, value: Math.ceil(selectorValue * length / 100) }));
                }
            }
        }, [selectorValue]
    );
    useEffect(
        () => {
            !isDown && moveMarker(Math.floor(value / length * 100));
        }, [isDown]
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

    const tickStylesArray = [...Array(length / step + 1).keys()]
        .map(
            i => ({
                key: i,
                left: `${i * step / length * 100}%`,
                right: String(i * step / length * 100) === '100' ? '0%' : null
            })
        )

    return (
        <div className='slider-container'>
            <label htmlFor={id}>{name}</label>
            <div id={id} className='range-body' onMouseMove={sliderHandler} onMouseDown={downHandler} onMouseUp={upHandler}>
                <div className="range-inner"></div>
                <div className="range-outer"></div>
                <div className="range-selector">
                    <div className="tooltip">{value}</div>
                </div>
                <div className="slider-line">
                    {
                        tickStylesArray.map(({ key, left, right }) => <span key={key} style={{ left, right }}>{key * step}</span>)
                    }
                </div>
            </div >
        </div>

    )
}

export default SliderContainer
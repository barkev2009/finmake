import React, { useState } from 'react'
import { SELECT_BLOCKS, SLIDERS } from '../../const'
import SelectContainer from './SelectContainer'
import SliderContainer from '../slider/SliderContainer'
import ResultCard from './ResultCard'

const CalculatorContainer = () => {

    return (
        <div id='calculator_container'>
            <ResultCard />
            <div>
                {
                    SELECT_BLOCKS.map(
                        item => <SelectContainer key={item.id} selectItem={item} />
                    )
                }
            </div>
            {
                SLIDERS.map(
                    item => <SliderContainer key={item.id} length={item.length} id={item.id} step={item.step} name={item.name} />
                )
            }
        </div>
    )
}

export default CalculatorContainer
import React from 'react'
import { SELECT_BLOCKS } from '../../const'
import SelectContainer from './SelectContainer'
import { CalcContextProvider } from '../../contexts/CalcContext/CalcContextProvider'
import SliderContainer from '../slider/SliderContainer'

const CalculatorContainer = () => {
    return (
        <CalcContextProvider>
            <div>
                {
                    SELECT_BLOCKS.map(
                        item => <SelectContainer key={item.id} selectItem={item} />
                    )
                }
            </div>
            <SliderContainer length={5} id={'slider_1'} />
            <SliderContainer length={40} id={'slider_2'} step={5} />
        </CalcContextProvider>
    )
}

export default CalculatorContainer
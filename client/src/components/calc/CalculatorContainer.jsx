import React from 'react'
import { SELECT_BLOCKS } from '../../const'
import SelectContainer from './SelectContainer'
import SliderContainer from '../slider/SliderContainer'
import ResultCard from './ResultCard'

const CalculatorContainer = () => {
    return (
        <div>
            <ResultCard />
            <div>
                {
                    SELECT_BLOCKS.map(
                        item => <SelectContainer key={item.id} selectItem={item} />
                    )
                }
            </div>
            <SliderContainer length={5} id={'marketplaceCount'} />
            <SliderContainer length={40} id={'employeeCount'} step={5} />
        </div>
    )
}

export default CalculatorContainer
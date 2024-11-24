import React, { useState } from 'react'
import { SELECT_BLOCKS, SLIDERS } from '../../const'
import SelectContainer from './SelectContainer'
import SliderContainer from '../slider/SliderContainer'
import ResultCard from './ResultCard'

const CalculatorContainer = () => {

    return (
        <div id='calculator_container'>
            <div className="calculator_content">
                <div className="title-block">
                    <h3 className='title'>Калькулятор</h3>
                    <h4>Рассчитайте стоимость бухгалтерского обслуживания</h4>
                </div>
                <ResultCard />
                <div className='selects_container'>
                    {
                        SELECT_BLOCKS.map(
                            item => <SelectContainer key={item.id} selectItem={item} />
                        )
                    }
                </div>
                <div className="sliders_container">
                    {
                        SLIDERS.map(
                            item => <SliderContainer key={item.id} length={item.length} id={item.id} step={item.step} name={item.name} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculatorContainer
import React from 'react'
import { useSelector } from 'react-redux'

const ResultCard = () => {
    const calcResult = useSelector(state => state.calc.result);

    return (
        <div className="result_card_container">
            <div className='result_card'>{`Примерная сумма расходов составит: ${calcResult.toLocaleString()} рублей`}</div>
        </div>
    )
}

export default ResultCard
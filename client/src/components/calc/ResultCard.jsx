import React from 'react'
import { useSelector } from 'react-redux'

const ResultCard = () => {
    const calcResult = useSelector(state => state.calc.result); 

    return (
        <div className='result_card'>{`Примерная сумма расходов: ${calcResult.toLocaleString()} рублей`}</div>
    )
}

export default ResultCard
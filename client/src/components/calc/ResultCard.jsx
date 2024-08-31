import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ResultCard = () => {
    const calcResult = useSelector(state => state.calc.result); 

    return (
        <div className='result_card'>{calcResult}</div>
    )
}

export default ResultCard
import React from 'react'
import Accounting from './Accounting'
import Authority from './Authority'
import Calculation from './Calculation'
import Operations from './Operations'
import Payroll from './Payroll'
import Taxes from './Taxes'

const ServiceIconGetter = ({ code }) => {
    switch (code) {
        case 'accounting':
            return <Accounting />
        case 'authority':
            return <Authority />
        case 'calculation':
            return <Calculation />
        case 'operations':
            return <Operations />
        case 'payroll':
            return <Payroll />
        case 'taxes':
            return <Taxes />
        default:
            return <></>
    }
}

export default ServiceIconGetter
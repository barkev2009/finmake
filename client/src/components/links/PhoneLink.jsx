import React from 'react'
import { FOOTER_DATA } from '../../const'

const PhoneLink = () => {
    return (
        <a href={`tel:${FOOTER_DATA.phone.replace('+', '').replace(/-/g, '')}`}>{FOOTER_DATA.phone}</a>
    )
}

export default PhoneLink
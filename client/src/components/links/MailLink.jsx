import React from 'react'
import { FOOTER_DATA } from '../../const'

const MailLink = () => {
    return (
        <a href={`mailto:${FOOTER_DATA.mail}`}>{FOOTER_DATA.mail}</a>
    )
}

export default MailLink
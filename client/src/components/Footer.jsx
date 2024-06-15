import React from 'react'
import MailLink from './links/MailLink'
import PhoneLink from './links/PhoneLink'

const Footer = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', position: 'relative', bottom: 0}}>
            <div>Генеральный директор: Иртуганова С.Н.</div>
            <MailLink />
            <PhoneLink />
        </div>
    )
}

export default Footer
import React from 'react'
import MailLink from './links/MailLink'
import PhoneLink from './links/PhoneLink'
import { FOOTER_DATA, PROGRESS_STATS, SKIP_ITEMS } from '../const'
import whiteLogo from '../img/whiteLogo.png'
import { navigateToId } from '../utils/navigate'

const Footer = () => {

    const footerItemHandler = (id) => {
        return () => {
            navigateToId(id);
        }
    }

    return (
        <div id='footer_container'>
            <div className="footer_content">
                <div className="left_panel">
                    <div className="company_col">
                        <div className="title">Компания</div>
                        <div className="column_items">
                            {
                                [...PROGRESS_STATS.filter(s => !SKIP_ITEMS.includes(s.name))]
                                    .map(stat => <div key={stat.name} onClick={footerItemHandler(stat.id)} className='footer_item'>{stat.name}</div>)
                            }
                        </div>
                    </div>
                    <div className="contacts_col">
                        <div className="title">Контакты</div>
                        <div className="column_items">
                            <PhoneLink />
                            <div className="address">{FOOTER_DATA.address}</div>
                            <MailLink />
                        </div>
                    </div>
                </div>
                <div className="right_panel">
                    <div className="icon"><img src={whiteLogo} alt="" /></div>
                    <div className="description">{FOOTER_DATA.description[0]}<br/>{FOOTER_DATA.description[1]}</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import PopupButton from './PopupButton'
import PhoneLink from './links/PhoneLink'
import imgPath from '../img/mainLogo.png'

const Header = () => {
  return (
    <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <img style={{height: '70px'}} src={imgPath} alt="main_logo" />
      <PhoneLink />
      <PopupButton />
    </nav>
  )
}

export default Header
import React from 'react'
import {useNavigate} from 'react-router-dom';
import PopupButton from './PopupButton'
import PhoneLink from './links/PhoneLink'
import imgPath from '../img/mainLogo.png'

const Header = () => {

  const navigate = useNavigate();

  return (
    <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <img style={{height: '70px', cursor: 'pointer'}} src={imgPath} alt="main_logo" onClick={() => navigate('/')} />
      <PhoneLink />
      <PopupButton />
    </nav>
  )
}

export default Header
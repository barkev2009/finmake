import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PopupButton from './PopupButton'
import imgPath from '../img/mainLogo.png'
import { PROGRESS_STATS } from '../const';
import burgerIcon from '../img/burger.png'
import burgerIconWhite from '../img/burger_white.png'

const Header = () => {

  const navigate = useNavigate();
  const [burgerActive, setBurgerActive] = useState(false);

  const headerItemHandler = (id) => {
    return () => {
      setBurgerActive(false);
      if (document.getElementById(id)) {
        window.scrollBy({ top: document.getElementById(id).getBoundingClientRect().top - document.getElementById('header_container').clientHeight, behavior: 'smooth' });
      }
    }
  }

  const burgerHandler = () => {
    setBurgerActive(prev => !prev);
  }

  return (
    <div id="header_container">
      <nav>
        <img style={{ height: '70px', cursor: 'pointer' }} src={imgPath} alt="main_logo" onClick={() => navigate('/')} />
        <div className="right_panel">
          <div className="header_items">
            {
              [...PROGRESS_STATS.filter(s => !['Хедер', 'Футер'].includes(s.name))]
                .map(stat => <div key={stat.name} onClick={headerItemHandler(stat.id)} style={{ color: (stat.name === 'Калькулятор' ? 'var(--main_color)' : 'black') }} className='header_item'>{stat.name}</div>)
            }
          </div>
          <PopupButton />
        </div>
        <div onClick={burgerHandler} className="burger">
          <img src={burgerIcon} alt="burger" />
        </div>
      </nav>
      <div style={{ transform: `translate(${burgerActive ? '0%' : '100%'})` }} className="header_slider_container">
        <div onClick={burgerHandler} className="burger">
          <img src={burgerIconWhite} alt="burger" />
        </div>
        <div className="header_items">
          {
            [...PROGRESS_STATS.filter(s => !['Хедер', 'Футер'].includes(s.name))]
              .map(stat => <div key={stat.name} onClick={headerItemHandler(stat.id)} className='header_item'>{stat.name}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header
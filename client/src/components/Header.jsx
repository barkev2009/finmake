import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PopupButton from '../common/PopupButton'
import imgPath from '../img/mainLogo.png'
import { PROGRESS_STATS, SKIP_ITEMS } from '../const';
import burgerIcon from '../img/burger.png'
import burgerIconWhite from '../img/burger_white.png'
import { navigateToId } from '../utils/navigate';

const Header = () => {

  const navigate = useNavigate();
  const [burgerActive, setBurgerActive] = useState(false);

  const headerItemHandler = (id) => {
    return () => {
      setBurgerActive(false);
      navigateToId(id);
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
              [...PROGRESS_STATS.filter(s => !SKIP_ITEMS.includes(s.name))]
                .map(stat => <div key={stat.name} onClick={headerItemHandler(stat.id)} style={{ color: (stat.name === 'Калькулятор' ? 'var(--main_color)' : 'var(--gray_color)') }} className='header_item'>{stat.name}</div>)
            }
          </div>
          <PopupButton />
          <div onClick={burgerHandler} className="burger">
            <img src={burgerIcon} alt="burger" />
          </div>
        </div>
      </nav>
      <div style={{ transform: `translate(${burgerActive ? '0%' : '100%'})` }} className="header_slider_container">
        <div onClick={burgerHandler} className="burger">
          <img src={burgerIconWhite} alt="burger" />
        </div>
        <div className="header_items">
          {
            [...PROGRESS_STATS.filter(s => !SKIP_ITEMS.includes(s.name))]
              .map(stat => <div key={stat.name} onClick={headerItemHandler(stat.id)} className='header_item'>{stat.name}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header
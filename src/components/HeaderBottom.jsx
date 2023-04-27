import '../scss/mortgage.scss';
import '../style/header_bottom.css'
import logo_cian from '../assets/logo_cian.svg';
import profile from '../assets/profile.svg';
import geolocation from '../assets/geolocation.svg';
import peak from '../assets/peak.svg';
import notifications from '../assets/notifications.svg';
import chat from '../assets/chat.svg';
import heart from '../assets/heart.svg';

export default function HeaderBottom() {
  return (

    <div className='header__bottom'>
      <img className='header__bottom-logo' src={logo_cian} />
      <ul className='header__bottom-item'>
        <li className='header__bottom-link'>Аренда</li>
        <li className='header__bottom-link'>Продажа</li>
        <li className='header__bottom-link'>Новостройки </li>
        <li className='header__bottom-link'>Коммерческая </li>
        <li className='header__bottom-link'>Ипотека </li>
        <li className='header__bottom-link'><img className='header__bottom-link-img' src={peak} /> Пик </li>
      </ul>
      <ul className="header__bottom-item">
        <li className="header__bottom-link"><img src={notifications} /></li>
        <li className="header__bottom-link"><img src={chat} /></li>
        <li className="header__bottom-link"><img src={heart} /></li>
        <li className="header__bottom-link">
          <button className='header__bottom-btn'>
            + Добавить объявление
          </button>
        </li>
      </ul>
    </div>
  )
}

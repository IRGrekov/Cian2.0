import '../style/mortgage.css';
import '../style/header_up.css';
import profile from '../assets/profile.svg';
import geolocation from '../assets/geolocation.svg';


export default function HeaderUp() {
  return (
    <div className='header__up'>
      <div className='header__up-region'>
        <img className='header__up-region-svg' src={geolocation} />
        <p className='header__up-region-text'>Москва и МО</p>
      </div>
      <ul className='header__up-item'>
        <li className='header__up-link'>Каталог специалистов</li>
        <li className='header__up-link'>Поиск по карте</li>
        <li className='header__up-link'>Оценка квартир</li>
        <li className='header__up-link'>Журнал</li>
        <li className='header__up-link'>Вопросы риелтору</li>
      </ul>
      <ul className='header__up-item'>
        <li className='header__up-link'>5 683,33 ₽</li>
        <li className='header__up-link'><img className='header__up-link-img' src={profile} /> 594321</li>
        <li className='header__up-link'>Личный кабинет</li>
        <li className='header__up-link'>Выйти</li>
      </ul>
    </div>
  )
}

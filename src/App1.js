import './scss/mortgage.scss';
import HeaderBottom from './components/HeaderBottom';
import HeaderUp from './components/HeaderUp';
import AllBets from './components/AllBets ';
import Info from './components/Info';
import ChangeElement from './components/ChangeElement';
import { useState } from 'react';
// import buildings from '../assets/buildings.png'
// import east from '../assets/east.png'
// import country from '../assets/country.png'
// import family from '../assets/family.png'
// import it from '../assets/it.png'

const arrInfo = [
  {
    text: 'Льготная', percent: '9%', maxCredit: '12 млн', duration: '30 лет', initial: '15%', inputText: 'Москва',
    // png: buildings, id: '1'
  },
  {
    text: 'Семейная', percent: '6%', maxCredit: '12 млн', duration: '30 лет', initial: '15%', inputText: 'Население от 1 млн человек',
    // png: family, id: '2'
  },
  {
    text: 'IT-специалисты', percent: '5%', maxCredit: '18 млн', duration: '30 лет', initial: '15%', inputText: 'Москва',
    // png: it, id: '3'
  },
  {
    text: 'Сельская', percent: '3%', maxCredit: '5 млн', duration: '25 лет', initial: '10%', inputText: 'Лениградская область',
    // png: east, id: '4'
  },
  {
    text: 'Дальневосточная', percent: '2%', maxCredit: '6 млн', duration: '20 лет', initial: '15%', inputText: 'ДФО',
    // png: country, id: '5'
  },
];
export default function App1() {

  const [radioBtn, setRadioBtn] = useState(arrInfo[0])

  console.log(">>>>>", radioBtn);

  return (
    <div className="form__wrapper">
      <div className='header'>
        <HeaderUp />
        <HeaderBottom />
        {/* {arrInfo.map(el => (
          <Info percentInfo={el} />
          
        ))} */}
        <div className='body'>

          <Info />
          <AllBets percentInfo={arrInfo} radioBtn={radioBtn} setRadioBtn={setRadioBtn} />
          <ChangeElement radioBtn={radioBtn} />
        </div>

      </div >
    </div>
  )
}


import './scss/mortgage.scss';
import HeaderBottom from './components/HeaderBottom';
import HeaderUp from './components/HeaderUp';
import AllBets from './components/AllBets ';
import Info from './components/Info';
import ChangeElement from './components/ChangeElement';
import { useState } from 'react';
import buildings from './assets/buildings.png'
import east from './assets/east.png'
import country from './assets/country.png'
import family from './assets/family.png'
import it from './assets/it.png'

const arrInfo = [
  {
    text: 'Льготная', percent: '9%', maxCredit: '12 млн', duration: '30 лет', initial: '15%', inputText: {
      'Москва': {
        percent: '9%',
        maxCredit: '12 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Питер': {
        percent: '9%',
        maxCredit: '12 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Питеsadр': {
        percent: '9%',
        maxCredit: '12 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Другой регион': {
        percent: '9%',
        maxCredit: '10 млн',
        duration: '20 лет',
        initial: '15%',
      }
    },
    png: buildings, id: '1',
  },
  {
    text: 'Семейная', percent: '6%', maxCredit: '12 млн', duration: '30 лет', initial: '15%', inputText: {
      'Москва': {
        percent: '6%',
        maxCredit: '12 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Питер': {
        percent: '6%',
        maxCredit: '12 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Другой регион': {
        percent: '9%',
        maxCredit: '18 млн',
        duration: '25 лет',
        initial: '15%',
      }
    },
    png: family, id: '2',
  },
  {
    text: 'IT-специалисты', percent: '5%', maxCredit: '18 млн', duration: '30 лет', initial: '15%', inputText: {
      'Москва': {
        percent: '5%',
        maxCredit: '18 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Питер': {
        percent: '5%',
        maxCredit: '15 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Другой регион': {
        percent: '6%',
        maxCredit: '10 млн',
        duration: '25 лет',
        initial: '20%',
      }
    },

    png: it, id: '3',
  },
  {
    text: 'Сельская', percent: '3%', maxCredit: '5 млн', duration: '25 лет', initial: '10%', inputText: {
      'Москва': {
        percent: '3%',
        maxCredit: '5 млн',
        duration: '20 лет',
        initial: '15%',
      },
      'Питер': {
        percent: '5%',
        maxCredit: '15 млн',
        duration: '15 лет',
        initial: '15%',
      },
      'Другой регион': {
        percent: '4%',
        maxCredit: '10 млн',
        duration: '15 лет',
        initial: '20%',
      }
    },

    png: country, id: '4',
  },
  {
    text: 'Дальневосточная', percent: '2%', maxCredit: '6 млн', duration: '20 лет', initial: '15%', inputText: {
      'Москва': {
        percent: '5%',
        maxCredit: '18 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Питер': {
        percent: '5%',
        maxCredit: '15 млн',
        duration: '30 лет',
        initial: '15%',
      },
      'Другой регион': {
        percent: '6%',
        maxCredit: '10 млн',
        duration: '25 лет',
        initial: '20%',
      }
    },
    png: east, id: '5',
  },
];
export default function App1() {

  const [radioBtn, setRadioBtn] = useState(arrInfo[0])

  return (
    <div className="form__wrapper">
      <div className='header'>
        <HeaderUp />
        <HeaderBottom />
        {/* {arrInfo.map(el => (
          <Info percentInfo={el} />
          
        ))} */}
        <Info />
        <AllBets percentInfo={arrInfo} radioBtn={radioBtn} setRadioBtn={setRadioBtn} />
        <ChangeElement radioBtn={radioBtn} />
      </div >
    </div>
  )
}


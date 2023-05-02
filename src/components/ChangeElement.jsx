import '../style/mortgage.css';
import { useState } from 'react';
import RegionsNow from './RegionsNow';
import '../style/bet.css'

const allRegArr = [{
  region: 'Москва'
},
{
  region: 'Питер'
},
{
  region: 'Другой регион'
}
]

export default function ChangeElement({ radioBtn }) {
  // const [regionNow, setRegionNow] = useState(allRegArr[0])
  const [regionNow, setRegionNow] = useState('Москва')
  // const [value, setValue] = useState("")

  // const handlerChange = (e) => {
  //   setValue(e.target.value)

  //   console.log("текст", e.target.value)
  // };
  // console.log('region', setRegionNow)
  console.log('radioBtn', radioBtn.inputText[regionNow])
  return (
    <>
      <div className='bet' >
        <div className="bet__boundered" style={{
          backgroundImage: `url(${radioBtn.png})`
        }}>
          <div className="bet__wrapper" >
            <p className='bet__title'>{radioBtn.text}</p>
            <p className='bet__subtitle'>Регион приобретения</p>
            <RegionsNow allRegArr={allRegArr} regionNow={regionNow} setRegionNow={setRegionNow} />

            <ul className='bet__list'>
              <li className='bet__link'>
                <p className='bet__link-title'>Процентная ставка</p>
                <p className='bet__link-text'> {radioBtn.inputText[regionNow].percent}</p>
              </li>
              <li className='bet__link'>
                <p className='bet__link-title'>Сумма кредита</p>
                <p className='bet__link-text'> до {radioBtn.inputText[regionNow].maxCredit} ₽</p>
              </li>
              <li className='bet__link'>
                <p className='bet__link-title'>Срок кредита</p>
                <p className='bet__link-text'> до {radioBtn.inputText[regionNow].duration}</p>
              </li>
              <li className='bet__link'>
                <p className='bet__link-title'>Первоначальный взнос</p>
                <p className='bet__link-text'> {radioBtn.inputText[regionNow].initial}</p>
              </li>
            </ul>
            <div className='bet__text'>
              <p className='bet__text-el'>На что распространяется</p>
              <p className='bet__text-el'>Квартиры у застройщиков</p>
            </div>
            <button className='bet__btn'>Узнать свои льготные ставки</button>
          </div>
        </div>
      </div>
    </>
  )
}

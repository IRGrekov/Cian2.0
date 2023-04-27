import '../style/mortgage.css';
import buildings from '../assets/buildings.png'
import east from '../assets/east.png'
import country from '../assets/country.png'
import family from '../assets/family.png'
import it from '../assets/it.png'


export default function ChangeElement({ radioBtn }) {

  let imgSrc = radioBtn.text
  if (radioBtn.text === 'Льготная') {
    imgSrc = buildings;
  } else if (radioBtn.text === 'Семейная') {
    imgSrc = family;
  } else if (radioBtn.text === 'IT-специалисты') {
    imgSrc = it;
  } else if (radioBtn.text === 'Сельская') {
    imgSrc = east;
  } else if (radioBtn.text === 'Дальневосточная') {
    imgSrc = country;
  }

  return (
    <>
      {/* <img className='demo' src={imgSrc} /> */}
      <div className='bet'>
        <>
          <div className='bet__header'>
            <p className='bet__header-text'><b>{radioBtn.text}</b></p>
            <p className='bet__header-subText'>Регион приобретения</p>
            <input
              className='bet__header-input'
              type="text"
              placeholder="Поиск"
            ></input>
          </div>
          <ul className='bet__listInfo'>
            <li className='bet__elInfo'>
              <p className='bet__elInfo-title'>Процентная ставка</p>
              <p className='bet__elInfo-text'> {radioBtn.percent}</p>
            </li>
            <li className='bet__elInfo'>
              <p className='bet__elInfo-title'>Сумма кредита</p>
              <p className='bet__elInfo-text'> до {radioBtn.maxCredit} ₽</p>
            </li>
            <li className='bet__elInfo'>
              <p className='bet__elInfo-title'>Срок кредита</p>
              <p className='bet__elInfo-text'> до {radioBtn.duration}</p>
            </li>
            <li className='bet__elInfo'>
              <p className='bet__elInfo-title'>Первоначальный взнос</p>
              <p className='bet__elInfo-text'> {radioBtn.initial}</p>
            </li>
          </ul>
        </>

      </div>
    </>
  )
}

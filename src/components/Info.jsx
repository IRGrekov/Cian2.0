import '../style/content.css';
import percentPeople from '../assets/percentPeople.svg';

export default function Info() {
  return (
    <div className='info'>
      <div className="info__wrapper">
        <div className="info__item">
          <h1 className='info__title'>Льготная ипотека с господдержкой </h1>
          <p className='info__text' >Циан.Ипотека предлагает ипотечные предложения от ведущих банков с льготными ставками. Программы для новостроек, семейная, сельская ипотека и иные виды льготных программ. Одна анкета — решения от 6 банков.</p>
          <button className='info__btn'>
            Узнать свои льготные ставки
          </button>
        </div>
        <div className="info__item">
          <img className='info__img' src={percentPeople} />
        </div>
      </div>
    </div>
  )
}

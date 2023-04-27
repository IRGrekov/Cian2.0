import '../style/mortgage.css';
import percentPeople from '../assets/percentPeople.svg';

export default function Info() {
  return (
    <div className='info'>
      <img className='info__svg' src={percentPeople} />
      <h1 className='info__heading'>Льготная ипотека с господдержкой </h1>
      <p className='info__text' >Циан.Ипотека предлагает ипотечные предложения от ведущих банков с льготными ставками. Программы для новостроек, семейная, сельская ипотека и иные виды льготных программ. Одна анкета — решения от 6 банков.</p>
      <button className='info__bottom'>
        Узнать свои льготные ставки
      </button>
      <h2 className='info__subtitle'>Льготные ипотечные программы</h2>
    </div>
  )
}

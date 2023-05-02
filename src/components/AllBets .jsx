import '../style/mortgage.css';


export default function AllBets({ percentInfo, radioBtn, setRadioBtn }) {

  console.log('percentInfo', percentInfo)
  console.log('radioBtn', radioBtn)

  return (
    <div className='bets'>
         <h2 className='info__subtitle'>Льготные ипотечные программы</h2>
      {percentInfo.map(el => {
        // ...
        console.log((radioBtn === el)

        )
        return (
          <label className={radioBtn === el ? 'bets__info bets__infoNow' : 'bets__info '} >
            <p className='bets__info-text'>{el.text}</p>
            <p className='info__bet-percent'>{el.percent}</p>
            <input className='bets__info-radioBtn' checked={radioBtn === el} type='radio' name='el' onChange={(() => setRadioBtn(el))} />
          </label>
        )
      })
      }
    </div>
  )
}

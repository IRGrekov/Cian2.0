import '../style/mortgage.css';
import { useState } from 'react';
import '../style/bet.css'


export default function RegionsNow({ allRegArr, regionNow, setRegionNow }) {
  const [showRegions, setRegions] = useState(false)

  const BtnClick = () => {
    setRegions(!showRegions)
  };

  const regionClick = (el) => {
    setRegionNow(el.region)
    setRegions(false)
  };

  return (
    <>
      <button className="bet__button" onClick={BtnClick}>
        {regionNow}
      </button>
      {showRegions && (
        <div className="bet__options">
          {allRegArr.map((el) => (
            <div className="bet__option" onClick={() => regionClick(el)}>
              {el.region}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

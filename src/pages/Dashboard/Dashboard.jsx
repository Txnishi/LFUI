import Orders from '../../components/Orders/Orders';
import { useState } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';


const Dashboard = () => {

  const [receivedData, setReceivedData] = useState(null);
  const handleData = (data) => {
    setReceivedData(data);
  };

  const [buttonLabel, setButtonLabel] = useState('Daily Summary Dashboard');

  const handleButtonClick = () => {
    // Toggle between two labels
    setButtonLabel((prevLabel) => (prevLabel === 'Daily Summary Dashboard' ? 'Monthly Summary Dashboard' : 'Daily Summary Dashboard'));
  };




  return <div className={css.container}>

    {/* left side */}

    <div className={css.dashboard}>
      {/* <div style={{padding}}></div> */}
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span><button title='click to change' className={css.dailyBtn} onClick={handleButtonClick}>{buttonLabel}</button></span>
        </div>
        <div className={css.cards}>
          {receivedData && receivedData.length &&
            (
              receivedData.map((card, index) => (
                <div className={css.card} key={card.id}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    {/* {card.amount ? (
                      <span>+{card.change}</span>
                    ) : (
                      <span> </span>
                    )
                    } */}
                  </div>

                  <div className={css.cardAmount}>
                    <span>{card.amount}</span>
                    {card.amount ? (
                      <span>{card.hour}</span>
                    ) : (
                      <span> </span>
                    )
                    }

                  </div>

                </div>
              ))
            )
          }
        </div>
      </div>



      <Statistics label={buttonLabel} handleData={handleData} />

    </div>
  </div>
}

export default Dashboard
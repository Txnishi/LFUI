import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';
const Dashboard = () => {
  return <div className={css.container}>

    {/* left side */}

    <div className={css.dashboard}>
      {/* <div style={{padding}}></div> */}
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Summary Dashboard</span>

          {/* <div className={css.durationButton}>
            <select>
              <option value="">Hourly</option>
              <option value="">Daily</option>
              <option value="">Monthly</option>
            </select>
          </div> */}
        </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card} key={card.id}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    {card.type === "price" ? <span>₹</span> : <span></span>}
                    <span>{groupNumber(card.amount)}</span>
                    {card.type !== "price" ? <span> units </span> : <span></span>}
                  </div>
                  
                </div>
              ))
            }
          </div>
      </div>



      <Statistics/>

    </div>
  </div>
}

export default Dashboard
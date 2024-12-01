import React from "react";
import styles from "./index.module.css";
import { data } from "../../../data/FreeBook";
function Card() {
  const filterData = data.filter((item) => item.category === "free");
  console.log(filterData);

  return (
    <>
          <div className={styles.container}>
      {filterData.map((val, i) => {
        return (
            <div className={styles.cardCont}>
              <div className={styles.cardImg}>
                <img src={val.img} key={i} />
                <div className={styles.cardFooter}>
                  <div className={styles.cardText}>
                    <div className={styles.cardHead}>
                      <h3 key={i}>{val.bookName}</h3>
                      <span key={i} className={styles.category}>
                        {val.category}
                      </span>
                    </div>
                    <p key={i}>{val.para}</p>
                    <div className={styles.endElem}>
                      <span className={styles.moneyText}> {val.money}</span>
                      <span className={styles.buy}>{val.buy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      );
        })}
          </div>
    </>
  );
}

export default Card;

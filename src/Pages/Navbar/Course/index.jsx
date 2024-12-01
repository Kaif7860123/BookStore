import React from 'react'
import styles from './index.module.css'
import { data } from "../../../data/FreeBook";
import Card from '../Card'; 
import { useNavigate } from 'react-router-dom';
function Course() {
  const jump=useNavigate()
  const goBack=()=>{
    jump("/")
  }
  
  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <h1>We're delighted to have <span>you here! :)</span> </h1>
            <p>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Sunt pariatur vel eligendi accusamus
                 necessitatibus unde quasi fuga vero iusto.
                  Quidem facere sapiente animi, repellat dolore corrupti
                   tempore necessitatibus ab? Harum necessitatibus debitis 
                   delectus quasi temporibus quaerat, et sunt eaque dolore
                    saepe ipsam officia obcaecati dolorem voluptas? aperiam obcaecati
                     cupiditate similique iusto vel provident itaque voluptatibus
                      fugiat autem quo nisi nemo repellat maxime, modi neque veniam
                       eveniet quod, rerum optio!</p>
                      
        </div>
        <div className={styles.backBtn}>
          <button onClick={goBack}>Back</button> </div>
       <div className={styles.cardData}>
       {
      data.slice(8,10).map((item,i)=>
      <Card key={i} item={item}/>
      )
       }
       </div>
    </div>
    </>
  )
}

export default Course

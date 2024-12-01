import React from "react";
import styles from "./index.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import books from "../../../assets/books.avif";
import Card from "../Card";
import Footer from "../footer";
function Home() {
  return (
    <>
       
      
      <div className={styles.bodyCont}>
        <div className={styles.mainCont}>
          <div className={styles.welcome_section}>
            <h1>Hello, welcomes here to learn something <span className={styles.newColor}>new everyday!!!</span> </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              vitae a nobis? Rerum maxime impedit nobis officiis vitae
              temporibus sint itaque soluta enim sit laborum nihil iusto,
              sapiente nemo facilis!
            </p>
            <div className={styles.emailInput}>
              <span className={styles.email}>
                <HiOutlineMailOpen />
              </span>{" "}
              <input type="text" placeholder="Email" />
            </div>
            <div className={styles.getBtn}>
              <button>Get started</button>
            </div>
          </div>
          <div className={styles.img_section}>
            <img src={books} />
          </div>
        </div>
        

        <div className={styles.text}>
            <h2>Free Offered Courses</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo sequi voluptas, inventore molestias laudantium! Autem aut reprehenderit
                 pariatur accusantium voluptatem iure aperiam ipsum sit. </p>
        </div>
      </div>

     <Card/>


      



    </>
  );
}

export default Home;

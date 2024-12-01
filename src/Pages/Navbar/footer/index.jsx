import React from 'react'
import styles from './index.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className={styles.container}>   
        <div className={styles.footerList}>
        <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press kit</li>
        </ul>
        </div>
        <div className={styles.icons}>
            <span><FaTwitter/></span>
            <span><FaYoutube/></span>
            <span><FaFacebookF/></span>
        </div>
        <p>copyright @ 2024 all right reserved by ACMI industries ltd</p>
      </div>
    </>
  )
}

export default Footer

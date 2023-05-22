import React from "react";
import Image from "next/image";
import styles from "../../../styles/SplashScreen.module.css";

function SplashScreen() {
  return (
    <div className={styles.SplashContainer}>
      <div className={styles.splash_content}>
        <h1 className={styles.splash_title}>Sampurasun</h1>
        <p className={styles.splash_desc}>
          Selamat datang di website virtual tour Kabupaten Purwakarta. Nikmati
          sensasi mengenal Kota Purwakarta dengan fitur Virtual Reality berbasis
          website dan mobile
        </p>
        <p className={styles.splash_desc}>
          Sebelum memulai petualangan, bacalah petunjuk dibawah ini:
        </p>
        <div className={styles.btn_wrap}>
          <button className={styles.btn_guide}>Desktop</button>
          <button className={styles.btn_guide}>Mobile</button>
        </div>
        <div className={styles.guide} id="desktop_guide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          rem eius animi est suscipit harum quidem, hic aliquam similique porro
          rerum eligendi alias! Aliquid incidunt eligendi excepturi ullam vero
          possimus!
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;

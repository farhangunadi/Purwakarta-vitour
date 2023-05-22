import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/SplashScreen.module.css";

function SplashScreen() {
  const [guide, setGuide] = useState(1);
  const handleGuideVersion = (buttonId) => {
    setGuide(buttonId);
  };

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
          <button
            style={{
              backgroundColor: guide === 1 ? "#E1CD8A" : "#4c3d3d",
              color: guide == 1 ? "#4c3d3d" : "",
            }}
            onClick={() => handleGuideVersion(1)}
            className={styles.btn_guide}
          >
            Desktop
          </button>
          <button
            style={{
              backgroundColor: guide === 2 ? "#E1CD8A" : "#4c3d3d",
              color: guide == 2 ? "#4c3d3d" : "",
            }}
            onClick={() => handleGuideVersion(2)}
            className={styles.btn_guide}
          >
            Mobile
          </button>
        </div>
        {guide == 1 ? (
          <div className={styles.guide} id="desktop_guide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            rem eius animi est suscipit harum quidem, hic aliquam similique
            porro rerum eligendi alias! Aliquid incidunt eligendi excepturi
            ullam vero possimus!
          </div>
        ) : (
          <div className={styles.guide} id="mobile_guide">
            Mobile,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis, rem eius animi est suscipit harum quidem, hic aliquam
            similique porro rerum eligendi alias! Aliquid incidunt eligendi
            excepturi ullam vero possimus!
          </div>
        )}
        <a className={styles.play_button} href="/mainmenu">
          Mulai
        </a>
      </div>
    </div>
  );
}

export default SplashScreen;

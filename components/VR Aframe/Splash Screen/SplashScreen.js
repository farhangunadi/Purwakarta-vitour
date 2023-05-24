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
            1. Pastikan koneksi internet yang anda gunakan stabil <br></br>
            2. Untuk dapat menjalankan 'virtual cursor', klik kiri pada layar.{" "}
            <br></br>
            3. Virtual cursor berbentuk lingkaran merah di tengah layar 4.
            Gunakan pergerakan mouse untuk navigasi arah kamera. <br></br>
            5. Tekan tombol 'Esc' pada keyboard untuk keluar dari virtual
            reality. <br></br>
            6. Arahkan 'virtual cursor' untuk melakukan suatu event (click,
            hover, dan lain lain). <br></br>
            7. Tekan tombol 'F' pada keyboard untuk full screen. <br></br>
            8. Selamat Berpetualang!
          </div>
        ) : (
          <div className={styles.guide} id="mobile_guide">
            1. Pastikan koneksi internet yang anda gunakan stabil.<br></br>
            2. Virtual cursor akan otomatis berfungsi untuk versi mobile.
            <br></br>
            3. Arahkan gawai 360 derajat kanan kiri atas bawah untuk navigasi
            kamera.<br></br>
            4. Untuk melakukan suatu event (klik, hover, dan lain lain) arahkan
            terlebih dahulu cursor ke objek lalu klik menggunakan jari.<br></br>
            5. Untuk melakukan pergerakan, gunakan joystick yang berada di pojok
            kanan bawah.<br></br>
            6. Disarankan gawai berposisi landscape untuk memaksimalkan navigasi
            kamera.<br></br>
            7. Selamat Berpetualang!.<br></br>
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

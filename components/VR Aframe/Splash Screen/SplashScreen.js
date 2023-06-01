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
              backgroundColor: guide === 1 ? "#15D3A0" : "#352D8B",
              color: guide == 1 ? "#221333" : "",
            }}
            onClick={() => handleGuideVersion(1)}
            className={styles.btn_guide}
          >
            Desktop
          </button>
          <button
            style={{
              backgroundColor: guide === 2 ? "#15D3A0" : "#352D8B",
              color: guide == 2 ? "#221333" : "",
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
            2. Website ini berisi konten multimedia, oleh sebab itu mungkin akan
            memakan sedikit waktu untuk masuk ke websitenya.<br></br>
            3. Untuk dapat menjalankan 'virtual cursor', klik kiri pada layar.{" "}
            <br></br>
            4. Virtual cursor berbentuk lingkaran merah di tengah layar.
            <br></br> 5. Gunakan pergerakan mouse untuk navigasi arah kamera.{" "}
            <br></br>
            6. Tekan tombol 'Esc' pada keyboard untuk keluar dari virtual
            reality. <br></br>
            7. Arahkan 'virtual cursor' untuk melakukan suatu event (click,
            hover, dan lain lain). <br></br>
            8. Tekan tombol 'F' pada keyboard untuk full screen. <br></br>
            9. Selamat Berpetualang!
          </div>
        ) : (
          <div className={styles.guide} id="mobile_guide">
            1. Pastikan koneksi internet yang anda gunakan stabil.<br></br>
            2. Website ini berisi konten multimedia,oleh sebab itu mungkin akan
            memakan sedikit waktu untuk masuk ke websitenya.<br></br>
            3. Virtual cursor akan otomatis berfungsi untuk versi mobile.
            <br></br>
            4. Arahkan gawai 360 derajat kanan kiri atas bawah untuk navigasi
            kamera.<br></br>
            5. Untuk melakukan suatu event (klik, hover, dan lain lain) arahkan
            terlebih dahulu cursor ke objek lalu tunggu beberapa saat dengan
            cursor tetap pada objek.<br></br>
            6. Untuk melakukan pergerakan, gunakan joystick yang berada di pojok
            kanan bawah.<br></br>
            7. Disarankan gawai berposisi landscape untuk memaksimalkan navigasi
            kamera.<br></br>
            8. Selamat Berpetualang!.<br></br>
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

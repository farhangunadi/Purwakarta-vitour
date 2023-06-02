import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../../styles/Gameplay.module.css";

export const SingleCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
        }}
        className={styles.containerCarousel}
      >
        <Slider {...settings}>
          <div>
            <Image
              className={styles.image_content}
              src="/images/GIF Petunjuk/movement.gif"
              alt="img"
              width="600"
              height="600"
              priority={true}
            />
            <h1 className={styles.content_text}>Movement/Pergerakan Pemain</h1>
            <h3 className={styles.content_desc}>
              1. Pada versi desktop gunakan keyboard untuk bergerak, tekan 'W'
              untuk maju, tekan 'S' untuk mundur, tekan 'D' untuk bergerak ke
              kanan, dan tekan 'A' untuk bergerak ke kiri.<br></br>2.Pada versi
              mobile, tekan dan tahan joystick yang terdapat di pojok kanan
              bawah serta arahkan sesuai keinginan.
            </h3>
          </div>
          <div>
            <Image
              className={styles.image_content}
              src="/images/GIF Petunjuk/button.gif"
              alt="img"
              width="600"
              height="600"
            />
            <h1 className={styles.content_text}>Lihat detail objek</h1>
            <h3 className={styles.content_desc}>
              1. Pada versi desktop, arahkan cursor ke objek yang dapat yang
              bertuliskan dapat di klik, lalu klik objek. <br></br>2. Pada versi
              mobile, arahkan cursor ke button yang bertuliskan dapat di klik,
              tunggu beberapa saat dengan tetap cursor terarah ke button.{" "}
              <br></br>3. Scroll Informasi untuk dapat melihat informasi secara
              menyeluruh
            </h3>
          </div>
          <div>
            <Image
              className={styles.image_content}
              src="/images/GIF Petunjuk/exit_game.gif"
              alt="img"
              width="600"
              height="600"
            />
            <h1 className={styles.content_text}>Keluar dari mode virtual</h1>
            <h3 className={styles.content_desc}>
              Pada versi desktop, gunakan tombol 'Esc' pada keyboard untuk
              keluar dari mode virtual tour. Sedangakn klik pada area virtual
              tour untuk masuk kembali ke mode virtual tour.
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

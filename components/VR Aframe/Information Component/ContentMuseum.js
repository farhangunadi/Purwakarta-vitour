import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/Gameplay.module.css";

function ContentMuseum() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupImage, setPopupImage] = useState("");

  const componentData = [
    {
      id: 1,
      title: "Pertunjukan Air Mancur Sribaduga",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image:
        "https://www.headlinejabar.com/wp-content/uploads/2016/04/Adv-Situ-Buleud2.jpg",
      boxPosition: "-5.2 1 -44.8",
      textPosition: "-5.1 1 -44.8",
      rotation: "0 90 0",
    },
    {
      id: 2,
      title: "Wisata Gunung Parang Via Ferrata",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/gnParang.jpg",

      boxPosition: "-5.2 1 -53",
      textPosition: "-5.1 1 -53",
      rotation: "0 90 0",
    },
    {
      id: 3,
      title: "Kerajinan Keramik Plered",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/pengrajinKeramik.jpg",

      boxPosition: "-5.2 1 -61",
      textPosition: "-5.1 1 -61",
      rotation: "0 90 0",
    },
    {
      id: 4,
      title: "Wisata Waduk Jatiluhur",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/",

      boxPosition: "-5.2 1 -69",
      textPosition: "-5.1 1 -69",
      rotation: "0 90 0",
    },
    {
      id: 5,
      title: "Wisata Kuliner Purwakarta",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/wiskul.jpg",

      boxPosition: "-5.2 1 -77.1",
      textPosition: "-5.1 1 -77.1",
      rotation: "0 90 0",
    },
    {
      id: 6,
      title: "Curug Cijalu",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/",

      boxPosition: "-5.2 1 -85.2",
      textPosition: "-5.1 1 -85.2",
      rotation: "0 90 0",
    },
    {
      id: 7,
      title: "Sate Maranggi",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/sate.jpeg",

      boxPosition: "4.7 1 -44.4",
      textPosition: "4.6 1 -44.4",
      rotation: "0 270 0",
    },
    {
      id: 8,
      title: "Taman Sri Baduga",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/tamansribaduga.jpg",

      boxPosition: "4.7 1 -52.4",
      textPosition: "4.6 1 -52.4",
      rotation: "0 270 0",
    },
    {
      id: 9,
      title: "Peta Purwakarta",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/peta.jpg",

      boxPosition: "4.7 1 -60.5",
      textPosition: "4.6 1 -60.5",
      rotation: "0 270 0",
    },
    {
      id: 10,
      title: "Kantor Bupati dan Wakil Bupati Purwakarta",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/kantor.jpg",

      boxPosition: "4.7 1 -68.5",
      textPosition: "4.6 1 -68.5",
      rotation: "0 270 0",
    },
    {
      id: 11,
      title: "Bupati dan Wk.Bupati Purwakarta",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/bupati.jpg",

      boxPosition: "4.7 1 -76.7",
      textPosition: "4.6 1 -76.7",
      rotation: "0 270 0",
    },
    {
      id: 12,
      title: "Alun-Alun Purwakarta",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image: "/images/fotoContent/alunalun.jpg",

      boxPosition: "4.7 1 -84.7",
      textPosition: "4.6 1 -84.7",
      rotation: "0 270 0",
    },
  ];
  function handleObjectClick(e) {
    setShowPopup(true);
    setPopupTitle(e.target.getAttribute("data-title"));
    setPopupMessage(e.target.getAttribute("data-message"));
    setPopupImage(e.target.getAttribute("data-image"));
  }

  function handleCloseClick() {
    setShowPopup(false);
    setPopupTitle("");
    setPopupMessage("");
    setPopupImage("");
  }

  return (
    <>
      <Head>
        <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
      </Head>
      {componentData.map((data) => (
        <>
          <a-box
            id={data.id}
            depth="0.1"
            height="1"
            width="2"
            position={data.boxPosition}
            rotation={data.rotation}
            material="transparent: true; opacity: 1"
            data-title={data.title}
            data-message={data.content}
            data-image={data.image}
            onClick={handleObjectClick}
            color="#432F2F"
            event-set__onMouseEnter="_event:mouseenter;color:#32a852;"
            event-set__onMouseLeave="_event:mouseleave;color:#432F2F;"
          ></a-box>
          <a-text
            position={data.textPosition}
            rotation={data.rotation}
            value="Info"
            align="center"
          ></a-text>
          {showPopup && (
            <div className={styles.popup}>
              <div className={styles.popup_content}>
                <span className={styles.close} onClick={handleCloseClick}>
                  &times;
                </span>
                <div className={styles.content}>
                  <Image
                    className={styles.image_content}
                    src={popupImage}
                    alt="img"
                    width="600"
                    height="600"
                  />
                  <div className={styles.desc_content}>
                    <h1 className={styles.content_text}>{popupTitle}</h1>
                    <p className={styles.content_desc}>{popupMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default ContentMuseum;

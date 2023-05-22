import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/Gameplay.module.css";

function ContentMuseum() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupImage, setPopupImage] = useState("");

  const componentData = [
    {
      id: 1,
      content: "Pertunjukan Air Mancur Sribaduga",
      boxPosition: "-5.2 1 -44.8",
      textPosition: "-5.1 1 -44.8",
      rotation: "0 90 0",
    },
    {
      id: 2,
      content: "Wisata Gunung Parang Via Ferrata",
      boxPosition: "-5.2 1 -53",
      textPosition: "-5.1 1 -53",
      rotation: "0 90 0",
    },
    {
      id: 3,
      content: "Kerajinan Keramik Plered",
      boxPosition: "-5.2 1 -61",
      textPosition: "-5.1 1 -61",
      rotation: "0 90 0",
    },
    {
      id: 4,
      content: "Wisata Waduk Jatiluhur",
      boxPosition: "-5.2 1 -69",
      textPosition: "-5.1 1 -69",
      rotation: "0 90 0",
    },
    {
      id: 5,
      content: "Pasar Juma'ah",
      boxPosition: "-5.2 1 -77.1",
      textPosition: "-5.1 1 -77.1",
      rotation: "0 90 0",
    },
    {
      id: 6,
      content: "Curug Cijalu",
      boxPosition: "-5.2 1 -85.2",
      textPosition: "-5.1 1 -85.2",
      rotation: "0 90 0",
    },
    {
      id: 7,
      content: "Pertunjukan Air Mancur Sribaduga",
      boxPosition: "4.7 1 -44.4",
      textPosition: "4.6 1 -44.4",
      rotation: "0 270 0",
    },
    {
      id: 8,
      content: "Wisata Gunung Parang Via Ferrata",
      boxPosition: "4.7 1 -52.4",
      textPosition: "4.6 1 -52.4",
      rotation: "0 270 0",
    },
    {
      id: 9,
      content: "Kerajinan Keramik Plered",
      boxPosition: "4.7 1 -60.5",
      textPosition: "4.6 1 -60.5",
      rotation: "0 270 0",
    },
    {
      id: 10,
      content: "Wisata Waduk Jatiluhur",
      boxPosition: "4.7 1 -68.5",
      textPosition: "4.6 1 -68.5",
      rotation: "0 270 0",
    },
    {
      id: 11,
      content: "Pasar Juma'ah",
      boxPosition: "4.7 1 -76.7",
      textPosition: "4.6 1 -76.7",
      rotation: "0 270 0",
    },
    {
      id: 12,
      content: "Curug Cijalu",
      boxPosition: "4.7 1 -84.7",
      textPosition: "4.6 1 -84.7",
      rotation: "0 270 0",
    },
  ];
  function handleObjectClick(e) {
    setShowPopup(true);
    setPopupMessage(e.target.getAttribute("data-message"));
    setPopupImage(e.target.getAttribute("data-image"));
  }

  function handleCloseClick() {
    setShowPopup(false);
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
            data-message={data.content}
            data-image="https://www.headlinejabar.com/wp-content/uploads/2016/04/Adv-Situ-Buleud2.jpg"
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
                    width="300"
                    height="300"
                  />
                  <p className={styles.content_text}>{popupMessage}</p>
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

import React, { useState } from "react";
import styles from "../../styles/Gameplay.module.css";
import Image from "next/image";

function PopUpMessage() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupImage, setPopupImage] = useState("");

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
      <a-box
        color="blue"
        depth="0.1"
        height="1"
        width="2"
        position="-5.2 1 -44.8"
        rotation="0 90 0"
        material="color: #EF2D5E; transparent: true; opacity: 1"
        data-message="Pertunjukan Air Mancur Sri Baduga"
        data-image="https://www.headlinejabar.com/wp-content/uploads/2016/04/Adv-Situ-Buleud2.jpg"
        onClick={handleObjectClick}
      ></a-box>
      <a-text
        position="-5.1 1 -44.8"
        rotation="0 90 0"
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
  );
}

export default PopUpMessage;

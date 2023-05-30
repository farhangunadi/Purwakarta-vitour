import React, { useState } from "react";
import styles from "../../../styles/SideNav.module.css";
import Image from "next/image";
import { SingleCarousel } from "../Carousel/SingleCarousel";

export const SideBarNav = () => {
  const [openBar, setOpenBar] = useState(false);
  const [icon, setIcon] = useState(false);
  const [petunjuk, setPetunjuk] = useState(true);
  const handleOpenSideNav = () => {
    setOpenBar(true);
    setIcon(true);
  };
  const handleCloseSideNav = () => {
    setOpenBar(false);
    setIcon(false);
  };
  const handleOpenPetunjuk = () => {
    setPetunjuk(true);
    console.log("testr");
  };
  const handleClosePetunjuk = () => {
    setPetunjuk(false);
  };
  return (
    <>
      <div className={styles.container}>
        {icon ? (
          <button className={styles.SideNavBtn} onClick={handleCloseSideNav}>
            Tutup
          </button>
        ) : (
          <button className={styles.SideNavBtn} onClick={handleOpenSideNav}>
            Menu
          </button>
        )}
        {petunjuk && (
          <div className={styles.popup}>
            <div className={styles.popup_content}>
              <span className={styles.close} onClick={handleClosePetunjuk}>
                &times;
              </span>
              <div className={styles.content}>
                <div className={styles.desc_content}>
                  <h1 className={styles.content_text + " " + styles.petunjuk}>
                    Petunjuk
                  </h1>
                </div>
                <SingleCarousel />
                {/* <Image
                  className={styles.image_content}
                  src="/images/guide.png"
                  alt="img"
                  width="300"
                  height="300"
                /> */}
              </div>
            </div>
          </div>
        )}
        {openBar && (
          <div className={styles.SideNav}>
            <ul>
              <li onClick={handleOpenPetunjuk}>Petunjuk</li>
              <li>
                <a href="/mainmenu">Kembali ke Main Menu</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

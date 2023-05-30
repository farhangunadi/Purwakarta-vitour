import React from "react";
import styles from "../../../styles/Loading.module.css";

export const LoadingScreen = () => {
  return (
    <div className={styles.superContainer}>
      <div className={styles.container}>
        <div className={styles.bar}>
          <div className={styles.circle}></div>
          <p className={styles.loadingText}>Loading</p>
        </div>
      </div>
    </div>
  );
};

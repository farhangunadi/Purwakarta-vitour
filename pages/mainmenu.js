// import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { LoadingScreen } from "../components/VR Aframe/Loading Screen/LoadingScreen";

const MainMenu = dynamic(() => import("../components/VR Aframe/MainMenu"), {
  ssr: false,
});
const WisataVR = dynamic(() => import("../components/VR Aframe/WisataVR"), {
  ssr: false,
});
export default function Mainmenu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Replace this with your actual loading logic
  }, []);
  return <>{loading ? <LoadingScreen /> : <MainMenu />}</>;
}

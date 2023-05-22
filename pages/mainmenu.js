// import styles from "../styles/Home.module.css";
import React from "react";
import styles from "../styles/Gameplay.module.css";
import dynamic from "next/dynamic";

const MainMenu = dynamic(() => import("../components/VR Aframe/MainMenu"), {
  ssr: false,
});
const WisataVR = dynamic(() => import("../components/VR Aframe/WisataVR"), {
  ssr: false,
});
export default function Mainmenu() {
  return <MainMenu />;
}

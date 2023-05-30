import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../components/VR Aframe/Loading Screen/LoadingScreen";

const VRgameplay = dynamic(() => import("../components/VR Aframe/VRgameplay"), {
  ssr: false,
});

function Gameplay() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading delay
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 7000); // Replace this with your actual loading logic
  // }, []);
  // return <>{loading ? <LoadingScreen /> : <VRgameplay />}</>;
  return <VRgameplay />;
}

export default Gameplay;

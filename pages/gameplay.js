import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../components/VR Aframe/Loading Screen/LoadingScreen";

const MuseumTour = dynamic(() => import("../components/VR Aframe/MuseumTour"), {
  ssr: false,
});

function Gameplay() {
  
  return <MuseumTour />;
}

export default Gameplay;

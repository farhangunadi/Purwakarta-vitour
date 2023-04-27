import React from "react";
import dynamic from "next/dynamic";

const VRgameplay = dynamic(() => import("../components/VR Aframe/VRgameplay"), {
  ssr: false,
});

function Gameplay() {
  return <VRgameplay />;
}

export default Gameplay;

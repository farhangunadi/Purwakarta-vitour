import React from "react";
import dynamic from "next/dynamic";

const WisataVR = dynamic(() => import("../components/VR Aframe/WisataVR"), {
  ssr: false,
});

export default function tourist() {
  return <WisataVR />;
}

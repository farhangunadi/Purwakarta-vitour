import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../components/VR Aframe/Loading Screen/LoadingScreen";

const WisataVR = dynamic(() => import("../components/VR Aframe/WisataVR"), {
  ssr: false,
});

export default function tourist() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return <>{loading ? <LoadingScreen /> : <WisataVR />}</>;
}

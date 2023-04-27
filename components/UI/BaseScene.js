import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  BakeShadows,
  Stage,
  PointerLockControls,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Floor from "../Basic Compt/Floor";

export const BaseScene = ({ children }) => {
  return (
    <>
      <Canvas style={{ height: "100vh" }} shadows camera={{ fov: 50 }}>
        <Physics gravity={[0, -9.8, 0]}>
          {children}
          <Floor rotation={[Math.PI / -2, 0, 0]} color="#28822e" />
        </Physics>
        <BakeShadows />
        <PointerLockControls />
        {/* <gridHelper /> */}
      </Canvas>
      <Loader />
    </>
  );
};

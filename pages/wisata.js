import React from "react";
import BaseCharacter from "../components/UI/BaseCharacter";
import { BaseScene } from "../components/UI/BaseScene";
import { Environment, Sky } from "@react-three/drei";
import { BaseSceneTourist } from "../components/UI/BaseSceneTourist";
import { FrontMuseum } from "../components/Assets/FrontMuseum";
import { SituBuleud } from "../components/Assets/Wisata/SituBuleud";
import { Gapura } from "../components/Assets/Pintu Masuk/Gapura";
import { RockWall } from "../components/Basic Compt/RockWall";
import { WadukJatiluhur } from "../components/Assets/Wisata/WadukJatiluhur";
import { Box } from "../components/Basic Compt/Box";
import { GnParang } from "../components/Assets/Wisata/GnParang";
import { Pendopo } from "../components/Assets/Wisata/Pendopo";

function Wisata() {
  return (
    <BaseSceneTourist>
      <BaseCharacter
        controls
        args={[1.5]}
        color="yellow"
        position={[-10, 5, 0]}
      />
      {/* <RockWall scale={0.8} position={[50.5, 0, 18.8]} />
      <RockWall scale={0.8} position={[50.5, 0, -16.3]} />
      <RockWall scale={0.8} position={[106.3, 0, -16.3]} />
      <RockWall
        scale={0.8}
        position={[70, 0, -0.3]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <RockWall
        scale={0.8}
        position={[89.2, 0, -0.3]}
        rotation={[0, Math.PI / 2, 0]}
      /> */}
      <Box position={[12, 0, -54]} args={[1, 15, 90]} />
      <Box position={[12, 0, 54]} args={[1, 15, 90]} />
      <Box position={[100, 0, 0]} args={[180, 0.1, 15]} color="black" />
      <Gapura position={[10, 0, 0]} scale={0.8} />
      <SituBuleud
        rotation={[0, Math.PI / 2, 0]}
        position={[50.4, 0, 50]}
        scale={1.6}
      />
      <WadukJatiluhur position={[63, -0.5, -60]} scale={4} />
      <GnParang position={[150, -1, -60]} scale={4.2} />
      <Pendopo
        rotation={[0, Math.PI, 0]}
        position={[120, -0.4, 40]}
        scale={2.5}
      />
      <Sky sunPosition={[0, 10, 0]} azimuth={0.25} inclination={10} />
      <Environment files="./environment/studio_garden_2k.hdr" />
    </BaseSceneTourist>
  );
}

export default Wisata;

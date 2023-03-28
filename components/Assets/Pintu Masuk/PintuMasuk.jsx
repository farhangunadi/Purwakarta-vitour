import React from "react";
import { Box } from "../../Basic Compt/Box";
import { Lampion } from "../Lampion";
import { Pagar } from "../Pagar";

export const PintuMasuk = () => {
  return (
    <group>
      <group>
        <Box position={[0, 0, 0]} args={[80, 0.01, 15]} color="black" />
      </group>
      <group>
        <Pagar scale={0.5} position={[18, 0, 3]} />
        <Pagar scale={0.5} position={[18, 0, -3]} />
      </group>
      <group>
        <Lampion scale={0.35} position={[0, 0, 0]} />
        <Lampion scale={0.35} position={[4, 0, 0]} />
        <Lampion scale={0.35} position={[8, 0, 0]} />
        <Lampion scale={0.35} position={[12, 0, 0]} />
        <Lampion scale={0.35} position={[16, 0, 0]} />
        <Lampion scale={0.35} position={[20, 0, 0]} />
        <Lampion scale={0.35} position={[24, 0, 0]} />
        <Lampion scale={0.35} position={[28, 0, 0]} />
        <Lampion scale={0.35} position={[32, 0, 0]} />
        <Lampion scale={0.35} position={[36, 0, 0]} />
      </group>
    </group>
  );
};

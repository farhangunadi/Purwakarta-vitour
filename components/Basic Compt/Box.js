import React from "react";
import { useBox } from "@react-three/cannon";

export const Box = ({ ...props }) => {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    position: props.position,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));
  return (
    <mesh castShadow position={props.position} rotation={props.rotation}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

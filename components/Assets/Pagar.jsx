import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function Pagar(props) {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: [0.1, 0.01, 0.1],
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    ...props,
  }));
  const { nodes, materials } = useGLTF("./models/pagar.glb");
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group
        position={[0.03, 1.28, -0.1]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.59, 0.93, 0.93]}
      >
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/pagar.glb");

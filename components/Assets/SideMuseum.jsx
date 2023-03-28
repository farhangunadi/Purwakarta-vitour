import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function SideMuseum(props) {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));
  const { nodes, materials } = useGLTF("./models/sideMuseum.glb");
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[4.55, 1, 4.55]}
      />
      <group scale={[4.55, 1, 4.55]}>
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Plane001_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        scale={[4.55, 1, 4.87]}
      />
      <group scale={[4.55, 1, 4.87]}>
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Plane003_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 1.04, -5.25]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-2.3, -1, -1]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 1.04, -5.25]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-2.3, -1, -1]}
      />
      <group position={[-0.05, 0, -15.41]} scale={7.5}>
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle_4.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["Material.003"]}
        position={[-0.06, 0, -15.41]}
        scale={7.5}
      />
      <group position={[-0.17, 5.77, -15.44]}>
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle003_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle003_3.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle005.geometry}
        material={nodes.Circle005.material}
        position={[-2.81, 6.93, -18.98]}
      />
      <group position={[2.47, 5.77, -19.05]}>
        <mesh
          geometry={nodes.Circle010.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle010_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle010_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-2.89, 6.37, -18.25]}>
        <mesh
          geometry={nodes.Circle011.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle011_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle011_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-4.32, 4.49, -13.35]}>
        <mesh
          geometry={nodes.Circle012.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle012_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle012_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[1.38, 7.48, -11.76]}>
        <mesh
          geometry={nodes.Circle013.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle013_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle013_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[4.5, 5.83, -15.08]}>
        <mesh
          geometry={nodes.Circle014.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Circle014_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Circle014_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/sideMuseum.glb");

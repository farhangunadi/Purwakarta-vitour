import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function Lampion(props) {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: [0.1, 0.01, 0.1],
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    ...props,
  }));
  const { nodes, materials } = useGLTF("./models/lampion.glb");
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
        position={[-0.07, 20.74, -14.09]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Cone001.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 19.87, -11.06]}
        scale={[1.33, 0.6, 1.33]}
      />
      <mesh
        geometry={nodes.Cone002.geometry}
        material={materials.Material}
        position={[-0.08, 20.68, -11.06]}
        scale={[1.33, 0.9, 1.33]}
      />
      <mesh
        geometry={nodes.Cone004.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.01, -8.48]}
        scale={[1.33, 0.6, 1.33]}
      />
      <mesh
        geometry={nodes.Cone005.geometry}
        material={materials.Material}
        position={[-0.08, 21.82, -8.48]}
        scale={[1.33, 0.9, 1.33]}
      />
      <mesh
        geometry={nodes.Cone007.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.42, -5.4]}
        scale={[1.33, 0.6, 1.33]}
      />
      <mesh
        geometry={nodes.Cone008.geometry}
        material={materials.Material}
        position={[-0.08, 22.23, -5.4]}
        scale={[1.33, 0.9, 1.33]}
      />
      <group position={[-0.08, 20.27, -2.09]} scale={[0.78, 0.97, 0.78]}>
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cylinder003_3.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Cylinder003_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cylinder003_5.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cylinder003_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cylinder003_7.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <mesh
        geometry={nodes.Cone010.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.42, -2.11]}
        scale={[1.33, 0.6, 1.33]}
      />
      <mesh
        geometry={nodes.Cone011.geometry}
        material={materials.Material}
        position={[-0.08, 22.23, -2.11]}
        scale={[1.33, 0.9, 1.33]}
      />
      <mesh
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
        position={[-0.07, 20.74, 13.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={-1}
      />
      <mesh
        geometry={nodes.Cone013.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 19.87, 10.93]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.6, -1.33]}
      />
      <mesh
        geometry={nodes.Cone014.geometry}
        material={materials.Material}
        position={[-0.08, 20.68, 10.93]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.9, -1.33]}
      />
      <mesh
        geometry={nodes.Cone016.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.01, 8.34]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.6, -1.33]}
      />
      <mesh
        geometry={nodes.Cone017.geometry}
        material={materials.Material}
        position={[-0.08, 21.82, 8.34]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.9, -1.33]}
      />
      <mesh
        geometry={nodes.Cone019.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.42, 5.26]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.6, -1.33]}
      />
      <mesh
        geometry={nodes.Cone020.geometry}
        material={materials.Material}
        position={[-0.08, 22.23, 5.26]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.9, -1.33]}
      />
      <mesh
        geometry={nodes.Cone022.geometry}
        material={materials["Material.003"]}
        position={[-0.08, 21.42, 1.97]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.6, -1.33]}
      />
      <mesh
        geometry={nodes.Cone023.geometry}
        material={materials.Material}
        position={[-0.08, 22.23, 1.97]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.33, -0.9, -1.33]}
      />
    </group>
  );
}

useGLTF.preload("./models/lampion.glb");

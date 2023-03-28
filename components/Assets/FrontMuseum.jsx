import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function FrontMuseum(props) {
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
  const { nodes, materials } = useGLTF("./models/FrontMuseum.glb");
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group
        position={[39.79, -0.01, -0.23]}
        rotation={[0, -1.57, 0]}
        scale={[7.56, 1.68, 1.68]}
      >
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Plane003_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group
        position={[38.92, 4.78, -0.23]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[3.48, 2.17, 3.48]}
      >
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Circle002_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Material.006"]}
        position={[39.79, -0.01, -0.23]}
        rotation={[0, -1.57, 0]}
        scale={[7.56, 1.68, 1.68]}
      />
      <group
        position={[90.47, -0.01, -0.3]}
        rotation={[0, -1.57, 0]}
        scale={[8.51, 1.68, 1.68]}
      >
        <mesh
          geometry={nodes.Plane006_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group
        position={[89.6, 4.78, -0.3]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[3.8, 2.17, 3.48]}
      >
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Circle003_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[40.7, 9.62, -0.29]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[11.33, 1.68, 10.89]}
      >
        <mesh
          geometry={nodes.Circle004_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Circle004_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[86.69, 6.48, 9.41]}
        rotation={[0, -1.57, 0]}
        scale={[1.05, 0.34, 1.68]}
      >
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials["Material.006"]}
        position={[35.34, 0.02, -2.43]}
        rotation={[0, -1.57, 0]}
        scale={1.68}
      />
      <mesh
        geometry={nodes.Circle023.geometry}
        material={materials["Material.006"]}
        position={[40.7, 9.62, -0.29]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[11.33, 1.68, 10.89]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Material}
        position={[108.09, 0.04, -0.3]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[8.24, 8.56, 8.67]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials["Material.001"]}
        position={[110.2, 0.38, -3.47]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.62, 1.09, 0.65]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[115.95, 1.43, -6.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.34, 1.41, 0.78]}
      />
      <group
        position={[114.98, 1.51, -4.19]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.36, 1.41, 1.43]}
      >
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        position={[108.09, 0.04, -0.3]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[8.24, 8.56, 8.67]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[106.94, 1.43, -9.89]}
        scale={[7.22, 1.41, 0.74]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[115.95, 1.43, 5.94]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-3.34, -1.41, -0.78]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["Material.002"]}
        position={[108.09, 0.04, -0.3]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-8.24, -8.56, -8.67]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.002"]}
        position={[106.94, 1.43, 9.3]}
        rotation={[0, 0, -Math.PI]}
        scale={[-7.22, -1.41, -0.74]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.002"]}
        position={[115.95, 8.23, -0.3]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[9.69, 1.41, 1.03]}
      />
      <group
        position={[114.68, 7, -0.31]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[5.21, 5.49, 5.41]}
      >
        <mesh
          geometry={nodes.Circle007_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle007_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle006.geometry}
        material={materials["Material.001"]}
        position={[114.68, 8.85, -0.31]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[10.61, 10.17, 10.04]}
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        material={nodes.Circle007.material}
        position={[114.61, 8.85, -0.3]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[10.47, 10.04, 10.04]}
      />
      <mesh
        geometry={nodes.Circle008.geometry}
        material={materials.Material}
        position={[114.68, 8.85, -0.31]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[10.61, 10.17, 10.67]}
      />
      <mesh
        geometry={nodes.Circle021.geometry}
        material={materials["Material.001"]}
        position={[110.2, 0.38, -0.15]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.62, 1.09, 0.65]}
      />
      <mesh
        geometry={nodes.Circle022.geometry}
        material={materials["Material.001"]}
        position={[110.2, 0.38, 3.03]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.62, 1.09, 0.65]}
      />
      <group
        position={[114.98, 1.51, -9]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.36, 1.41, 1.43]}
      >
        <mesh
          geometry={nodes.Circle027.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle027_1.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[114.98, 1.51, 3.63]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-1.36, -1.41, -1.43]}
      >
        <mesh
          geometry={nodes.Circle028.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle028_1.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[114.98, 1.51, 8.44]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-1.36, -1.41, -1.43]}
      >
        <mesh
          geometry={nodes.Circle029.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Circle029_1.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.Material}
        position={[94.99, 1.31, -9.46]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.43, 1.68, 1.79]}
      />
      <mesh
        geometry={nodes.Circle009.geometry}
        material={materials["Material.004"]}
        position={[111.97, 10.45, 9.2]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <mesh
        geometry={nodes.Circle010.geometry}
        material={materials["Material.004"]}
        position={[107.79, 10.45, 9.2]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <mesh
        geometry={nodes.Circle012.geometry}
        material={materials["Material.004"]}
        position={[103.25, 10.45, 9.2]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <group
        position={[111.97, 10.45, 9.2]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      >
        <mesh
          geometry={nodes.Circle013_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Circle013_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[107.81, 10.45, 9.2]}
        rotation={[-1.57, 0, -Math.PI]}
        scale={[1.43, 1.43, 1.41]}
      >
        <mesh
          geometry={nodes.Circle017_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Circle017_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[103.23, 10.45, 9.2]}
        rotation={[-2.07, 0, -Math.PI]}
        scale={[1.43, 1.43, 1.42]}
      >
        <mesh
          geometry={nodes.Circle018_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Circle018_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle015.geometry}
        material={materials["Material.004"]}
        position={[103.25, 10.45, -11.08]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <mesh
        geometry={nodes.Circle016.geometry}
        material={materials["Material.004"]}
        position={[107.66, 10.45, -11.08]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <mesh
        geometry={nodes.Circle017.geometry}
        material={materials["Material.004"]}
        position={[111.9, 10.45, -11.08]}
        rotation={[-0.87, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.42]}
      />
      <group
        position={[103.23, 10.45, -9.82]}
        rotation={[-2.74, 0, -Math.PI]}
        scale={[1.43, 1.42, 1.43]}
      >
        <mesh
          geometry={nodes.Circle022_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Circle022_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[107.74, 10.45, -9.82]}
        rotation={[-1.94, 0, -Math.PI]}
        scale={[1.43, 1.43, 1.41]}
      >
        <mesh
          geometry={nodes.Circle023_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Circle023_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[111.93, 10.45, -9.82]}
        rotation={[-1.95, 0, -Math.PI]}
        scale={[1.43, 1.43, 1.41]}
      >
        <mesh
          geometry={nodes.Circle024.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Circle024_1.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["Material.003"]}
        position={[107.31, 0.09, -0.29]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.91, 2.79, 4.91]}
      />
    </group>
  );
}

useGLTF.preload("./models/FrontMuseum.glb");

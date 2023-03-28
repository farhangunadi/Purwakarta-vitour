import React from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { usePlayerControls } from "../utils/helper";
import * as THREE from "three";

export const BaseCharacter = (props) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 8;

  const { camera } = useThree();
  const [ref, api] = useSphere((index) => ({
    mass: 3,
    type: "Dynamic",
    position: [-10, 8, 0],
    rotation: [0, Math.PI / 2, 0],
    ...props,
  }));

  const { forward, backward, left, right, jump } = usePlayerControls();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useEffect(() => {
    camera.position.set(0, 0, 0);
    camera.rotation.set(0, Math.PI / -2, 0);
  }, []);
  useFrame((state) => {
    ref.current.getWorldPosition(camera.position);
    console.log(camera.position);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 4, velocity.current[2]);
  });

  return (
    <group>
      <mesh castShadow position={props.position} ref={ref}>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
  );
};

export default BaseCharacter;

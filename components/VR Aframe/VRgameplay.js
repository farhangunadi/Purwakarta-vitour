import React from "react";
import AFRAME from "aframe";
import { AFrameRenderer, Entity, Scene } from "aframe-react";
import { FrontSide } from "./FrontSide";
import Image from "next/image";
import styles from "../../styles/Gameplay.module.css";
import * as THREE from "three";

function VRgameplay() {
  let direction = new THREE.Vector3();
  let movement = new THREE.Vector3();

  function touchEndListener() {
    movement = new THREE.Vector3();
  }

  function clickListener(ev) {
    let cam = document.querySelector("#cam");
    let position = cam.getAttribute("position");

    let sceneEl = document.querySelector("#scene");
    let cameraDirection = sceneEl.camera.getWorldDirection(direction);
    cameraDirection.multiplyScalar(0.4);

    if (ev.srcElement.id == "up") {
      console.log("up");

      movement.x += cameraDirection.x;
      movement.z += cameraDirection.z;
    } else if (ev.srcElement.id == "down") {
      console.log("down");

      movement.x -= cameraDirection.x;
      movement.z -= cameraDirection.z;
    }

    let sideDirection = cameraDirection.cross(new THREE.Vector3(0, 1, 0));
    if (ev.srcElement.id == "right") {
      console.log("right");

      movement.x += sideDirection.x;
      movement.z += sideDirection.z;
    } else if (ev.srcElement.id == "left") {
      console.log("left");

      movement.x -= sideDirection.x;
      movement.z -= sideDirection.z;
    }
    cam.setAttribute("position", position);
  }
  AFRAME.registerComponent("player-movement", {
    tick: function () {
      if (movement.length() == 0) {
        return;
      }
      let cam = document.querySelector("#cam");
      let position = cam.getAttribute("position");

      position.x = movement.x;
      position.z = movement.z;
      cam.setAttribute("position", position);
    },
    init: function () {
      let up = document.querySelector("#up");
      let down = document.querySelector("#down");
      let left = document.querySelector("#left");
      let right = document.querySelector("#right");

      up.addEventListener("touchstart", clickListener);
      down.addEventListener("touchstart", clickListener);
      left.addEventListener("touchstart", clickListener);
      right.addEventListener("touchstart", clickListener);

      up.addEventListener("touchend", touchEndListener);
      down.addEventListener("touchend", touchEndListener);
      left.addEventListener("touchend", touchEndListener);
      right.addEventListener("touchend", touchEndListener);
    },
  });

  return (
    <>
      <Image
        id="up"
        src="/images/arrow.png"
        className={styles.upBtn}
        width="100"
        height="100"
        alt="arrowBtn"
      />
      <Image
        id="down"
        src="/images/arrow.png"
        className={styles.downBtn}
        width="100"
        height="100"
        alt="arrowBtn"
      />
      <Image
        id="right"
        src="/images/arrow.png"
        className={styles.rightBtn}
        width="100"
        height="100"
        alt="arrowBtn"
      />
      <Image
        id="left"
        src="/images/arrow.png"
        className={styles.leftBtn}
        width="100"
        height="100"
        alt="arrowBtn"
      />
      <a-scene id="scene" player-movement>
        <a-assets>
          <a-asset-item
            id="tembokInfo2"
            src="./models/tembokInfo2.glb"
          ></a-asset-item>
          <a-asset-item
            id="tembokInfo"
            src="./models/tembokInfo.glb"
          ></a-asset-item>
          <a-asset-item
            id="frontMuseum"
            src="./models/FrontMuseum.glb"
          ></a-asset-item>
          <a-asset-item
            id="sideMuseum"
            src="./models/sideMuseum.glb"
          ></a-asset-item>
          <a-asset-item
            id="KontenSideMuseum"
            src="./models/kontenSejarahPurwakarta.glb"
          ></a-asset-item>
          <img
            id="sechelt"
            crossorigin="anonymous"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
          ></img>
        </a-assets>
        <a-camera id="cam" position="0 1.6 0" rotation="0 90 0">
          <a-cursor></a-cursor>
        </a-camera>

        <a-plane
          color="#215763"
          height="1000"
          width="1000"
          rotation="-90 0 0"
          position="0 1 0"
        ></a-plane>
        <a-sky
          id="image-360"
          radius="100"
          src="#sechelt"
          data-set-image-fade-setup="true"
          animation__fade=""
        ></a-sky>
        <a-gltf-model src="#frontMuseum" rotation="0 90 0"></a-gltf-model>
      </a-scene>
      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default VRgameplay;

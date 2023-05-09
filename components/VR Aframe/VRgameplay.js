import React from "react";
import AFRAME from "aframe";
import { AFrameRenderer, Entity, Scene } from "aframe-react";
import { FrontSide } from "./FrontSide";
import Image from "next/image";
import styles from "../../styles/Gameplay.module.css";
import * as THREE from "three";
import Head from "next/head";
import PopUpMessage from "./PopUpMessage";

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
    cameraDirection.multiplyScalar(0.1);

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

      position.x += movement.x;
      position.z += movement.z;
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
      <Head>
        <script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"></script>
      </Head>
      {/* <Image
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
      /> */}
      <a className={styles.backBtn} href="/">
        Back to Homepage
      </a>
      <a-scene id="scene" joystick>
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
          <img id="joystick" src="images/joystick.png" />
          <img id="keyboard" src="images/keyboard.png" />
        </a-assets>
        <a-camera
          id="camera"
          look-controls="pointerLockEnabled:true"
          position="0 1.6 10"
          rotation="0 90 0"
          wasd-controls="acceleration: 40"
        >
          <a-cursor material="color: red; shader: flat"></a-cursor>
        </a-camera>
        <a-plane
          color="#215763"
          height="1000"
          width="1000"
          rotation="-90 0 0"
          position="0 0 0"
        ></a-plane>
        <a-sky
          id="image-360"
          radius="1000"
          src="#sechelt"
          data-set-image-fade-setup="true"
          animation__fade=""
        ></a-sky>
        {/* guide */}
        <a-box
          color="tomato"
          depth="0.1"
          height="6"
          width="8"
          position="0 1.6 0"
          material="color: #EF2D5E; transparent: true; opacity: 0.8"
        ></a-box>
        <a-text value="Guide" position="0 4 0.1" align="center"></a-text>
        <a-image
          src="#keyboard"
          width="4"
          height="2"
          position="-1.5 2.8 0.1"
        ></a-image>
        <a-text value="Mobile Version" position="-3.5 1.3 0.1"></a-text>
        <a-image
          src="#joystick"
          width="1.6"
          height="0.6"
          position="-2.7 0.8 0.1"
        ></a-image>

        {/* model */}
        <a-gltf-model src="#frontMuseum" rotation="0 90 0"></a-gltf-model>
        <a-gltf-model
          src="#tembokInfo2"
          rotation="0 90 0"
          scale="0.9 0.9 0.9"
          position="-5 0 -65"
        ></a-gltf-model>
        <a-gltf-model
          src="#tembokInfo"
          rotation="0 180 0"
          scale="0.9 0.9 0.9"
          position="5 0 -65"
        ></a-gltf-model>
        <a-gltf-model
          src="#sideMuseum"
          position="-31 0 -95"
          scale="2 2 2"
        ></a-gltf-model>
        <a-gltf-model
          src="#KontenSideMuseum"
          position="-31 0 -94.8"
          scale="1.9 1.9 1.9"
        ></a-gltf-model>
        <FrontSide />
        <PopUpMessage />
      </a-scene>
      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default VRgameplay;

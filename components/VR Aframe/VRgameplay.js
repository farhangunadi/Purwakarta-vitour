import React from "react";
import AFRAME from "aframe";
import { AFrameRenderer, Entity, Scene } from "aframe-react";
import { FrontSide } from "./FrontSide";
import Image from "next/image";
import styles from "../../styles/Gameplay.module.css";
import * as THREE from "three";
import Head from "next/head";
import ContentMuseum from "./Information Component/ContentMuseum";

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

  AFRAME.registerComponent("video-controls", {
    init: function () {
      var myVideo = document.querySelector("#profilePwk");
      var videoControl = document.querySelector("#videoControls");
      this.el.addEventListener("click", function () {
        if (myVideo.paused) {
          myVideo.play();
          videoControl.setAttribute("src", "#pause");
        } else {
          myVideo.pause();
          videoControl.setAttribute("src", "#play");
        }
      });
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
      <a className={styles.backBtn} href="/mainmenu">
        Back to Homepage
      </a>
      <a-scene
        id="scene"
        reflection="directionalLight:a-light#dirlight;"
        joystick
      >
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
            src="images/citySky.jpg"
          ></img>
          <img id="guide" src="images/guide.png" />
          <img id="play" src="images/play.png" />
          <img id="pause" src="images/pause.png" />
          <img id="env" src="images/ehingen_hillside_2k.jpg" />
          <video id="profilePwk" src="video/profil_pwk.mp4" loop="true" />
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
        {/* <a-light
          type="hemisphere"
          color="#FFFFFF"
          ground-color="#000000"
          intensity="1"
        >
          <a-entity geometry="primitive: sphere; radius: 1;"></a-entity>
          <a-entity material="shader: flat; src: images/ehingen_hillside_2k.jpg;"></a-entity>
        </a-light> */}

        <a-light
          id="dirlight"
          intensity="0.7"
          light="castShadow:true;type:directional"
          position="0.5 1 1"
          color="#FFBC80"
        ></a-light>
        <a-light
          type="ambient"
          color="#ffff"
          position="0 0 1"
          intensity="0.3"
        ></a-light>

        <a-plane
          color="#40513B"
          height="1000"
          width="1000"
          rotation="-90 0 0"
          position="0 0 0"
        ></a-plane>
        <a-sky
          id="image-360"
          radius="200"
          src="#sechelt"
          data-set-image-fade-setup="true"
          animation__fade=""
        ></a-sky>
        {/* guide */}
        <a-box
          depth="0.1"
          height="6"
          width="9"
          position="0 1.6 0"
          material="color: #100244; transparent: true; opacity: 0.94"
        ></a-box>
        <a-text
          value="Petunjuk"
          scale="2 2 2"
          position="0 4 0.1"
          align="center"
        ></a-text>
        <a-image src="#guide" width="8" height="3" position="0 2 0.1"></a-image>

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
        <a-entity>
          <a-box
            position="-0.3 4.5 -110.53"
            color="#432F2F"
            width="8"
            height="4.5"
          ></a-box>
          <a-video
            src="#profilePwk"
            width="8"
            height="4.5"
            position="-0.3 4.5 -110"
          ></a-video>
          <a-cylinder
            color="#B07217"
            radius="1"
            position="-0.2 1.42 -110.26"
            scale="0.5 0.5 0.5"
            rotation="90 0 0"
          ></a-cylinder>
          <a-image
            id="videoControls"
            src="#play"
            position="-0.2 1.4 -110"
            scale="1 1 3"
            video-controls
          ></a-image>
        </a-entity>
        <FrontSide />
        <ContentMuseum />
      </a-scene>
      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default VRgameplay;

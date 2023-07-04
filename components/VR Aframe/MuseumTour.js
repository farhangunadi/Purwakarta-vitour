import React, { useRef, useEffect, useState } from "react";
import AFRAME from "aframe";
import { FrontSide } from "./FrontSide";
import Image from "next/image";
import styles from "../../styles/Gameplay.module.css";
import * as THREE from "three";
import Head from "next/head";
import ContentMuseum from "./Information Component/ContentMuseum";
import { SideBarNav } from "./SideBarNav/SideBarNav";
import Script from "next/script";
function MuseumTour() {
  useEffect(() => {
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
    AFRAME.registerComponent("custom-controls", {
      init: function () {
        // Define camera movement limits
        var minHeight = 1.6;
        var maxHeight = 5;

        // Initialize variables
        var isMovingUp = false;
        var isMovingDown = false;

        var cameraEl = this.el;
        var currentPosition = cameraEl.getAttribute("position");

        // Keydown event listener for 'z' key
        window.addEventListener("keydown", function (event) {
          if (event.key === "z") {
            if (currentPosition.y < maxHeight) {
              cameraEl.setAttribute("position", {
                x: currentPosition.x,
                y: currentPosition.y + 0.1,
                z: currentPosition.z,
              });
            }
          }
        });

        // Keyup event listener for 'z' key
        window.addEventListener("keyup", function (event) {
          if (event.key === "z") {
            isMovingUp = false;
          }
        });

        // Keydown event listener for 'x' key
        window.addEventListener("keydown", function (event) {
          if (event.key === "x") {
            if (currentPosition.y > minHeight) {
              cameraEl.setAttribute("position", {
                x: currentPosition.x,
                y: currentPosition.y - 0.1,
                z: currentPosition.z,
              });
            }
          }
        });

        // Keyup event listener for 'x' key
        window.addEventListener("keyup", function (event) {
          if (event.key === "x") {
            isMovingDown = false;
          }
        });
      },
    });
  }, []);

  const [musicControls, setMusicControls] = useState(false);
  const musicRef = useRef();
  // var speaker = document.querySelector("#musicBg");

  const handlePlayMusic = () => {
    musicRef.current.pause();
    musicRef.currentTime = 0;

    // speaker.components.sound.pauseSound();
    setMusicControls(true);
  };

  const handleStopMusic = () => {
    const music = musicRef.current;
    music.play();
    setMusicControls(false);
    // speaker.components.sound.playSound();
  };
  const loopMusic = () => {
    var audio = document.querySelector("#voiceOver");

    audio.addEventListener("loadedmetadata", function () {
      audio.loop = false; // Disable looping
    });
  };

  return (
    <>
      <Head>
        <script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@7.0.0/dist/aframe-extras.min.js"></script>
      </Head>
      <SideBarNav />
      {/* <a className={styles.backBtn} href="/mainmenu">
        Back to Homepage
      </a> */}
      {musicControls ? (
        <Image
          width="100"
          height="100"
          src="/images/pauseSound.png"
          className={styles.btnMusic}
          onClick={handleStopMusic}
          alt="stopMusicIcon"
        />
      ) : (
        <Image
          width="100"
          height="100"
          src="/images/playSound.png"
          className={styles.btnMusic}
          onClick={handlePlayMusic}
          alt="playMusicIcon"
        />
      )}
      <a-scene
        debug
        id="scene"
        reflection="directionalLight:a-light#dirlight;"
        joystick
        loading-screen="dotsColor: #24EFAD; backgroundColor: #100244"
        audio-controller
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
            src="./models/FrontMuseum2.glb"
          ></a-asset-item>
          <a-asset-item
            id="sideMuseum"
            src="./models/sideMuseum.glb"
          ></a-asset-item>
          <a-asset-item
            id="KontenSideMuseum"
            src="./models/kontenSejarahPurwakarta.glb"
          ></a-asset-item>
          <a-asset-item id="navmesh" src="./models/navmesh.glb"></a-asset-item>
          <img
            id="sechelt"
            crossorigin="anonymous"
            src="images/citySky.jpg"
          ></img>
          <img id="guide" src="images/guide.png" />
          <img id="play" src="images/play.png" />
          <img id="pause" src="images/pause.png" />
          <img id="env" src="images/ehingen_hillside_2k.jpg" />
          <video
            id="profilePwk"
            src="video/profil_pwk.mp4"
            loop="true"
            crossorigin
            playsinline
          />
          <audio
            id="music"
            src="music/EMKA9-Girimis.mp3"
            loop="true"
            autoPlay
            preload="auto"
            ref={musicRef}
          ></audio>
          <audio id="voiceOver" src="music/voiceOver.mp3" autoPlay></audio>
        </a-assets>
        <a-entity id="musicBg" src="src: #music; autoplay: true;"></a-entity>
        <a-sound id="voice_over" src="#voiceOver;"></a-sound>

        <a-camera
          id="camera"
          look-controls="pointerLockEnabled:true"
          position="0 1.6 10"
          rotation="0 90 0"
          wasd-controls="acceleration: 40"
          custom-controls
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
          height="500"
          width="500"
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
        {/* <a-gltf-model
          src="#navmesh"
          rotation="0 90 0"
          position="0 0 0.5"
          nav-mesh
        ></a-gltf-model> */}
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
            position="-0.3 4.5 -111"
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
        {/* <div className={styles.pauseMenu}>
          <h1 className={styles.pauseTitle} onClick={handlePlayAgain}>
            Pause
          </h1>
          <button className={styles.btnPause}>Play</button>
          <button className={styles.btnPause}>Exit</button>
        </div> */}
      </a-scene>

      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default MuseumTour;

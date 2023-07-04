import React, { useRef, useEffect, useState } from "react";
import AFRAME from "aframe";
import Image from "next/image";
import Head from "next/head";
import { Entity } from "aframe-react";
import styles from "../../styles/Gameplay.module.css";
import { SideBarNav } from "./SideBarNav/SideBarNav";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function WisataVR() {
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

  useEffect(() => {
    AFRAME.registerComponent("camera-updown", {
      init: function () {
        // Define camera movement limits
        var minHeight = 1.6;
        var maxHeight = 5;

        // Initialize variables
        var isMovingUp = false;
        var isMovingDown = false;

        var cameraEl = this.el;
        var currentPosition = cameraEl.getAttribute("position");

        // Get the up button element
        var upButton = document.getElementById("upButton");

        // Get the down button element
        var downButton = document.getElementById("downButton");

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

        upButton.addEventListener("touchstart", function () {
          // Move camera up
          if (currentPosition.y < maxHeight) {
            cameraEl.setAttribute("position", {
              x: currentPosition.x,
              y: currentPosition.y + 0.1,
              z: currentPosition.z,
            });
          }
        });
        // Mouse events for the down button
        downButton.addEventListener("touchstart", function () {
          // Move camera down
          if (currentPosition.y > minHeight) {
            cameraEl.setAttribute("position", {
              x: currentPosition.x,
              y: currentPosition.y - 0.1,
              z: currentPosition.z,
            });
          }
        });
      },
    });
  }, []);

  return (
    <>
      <Head>
        <script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"></script>
      </Head>
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
      <button id="upButton" className={styles.btnUp}>
        <AiFillCaretUp />
      </button>
      <button id="downButton" className={styles.btnDown}>
        <AiFillCaretDown />
      </button>
      <SideBarNav />
      <a-scene
        joystick
        loading-screen="dotsColor: #24EFAD; backgroundColor: #100244"
      >
        <a-camera
          id="camera"
          look-controls="pointerLockEnabled:true"
          position="0 1.6 0"
          wasd-controls="acceleration: 40"
          camera-updown
        >
          <a-cursor material="color: red; shader: flat"></a-cursor>
        </a-camera>
        <a-assets>
          <a-asset-item
            id="gapura"
            src="./models/gapuraWithoutWall.glb"
          ></a-asset-item>
          <a-asset-item
            id="situBuleud"
            src="./models/situBuleud.glb"
          ></a-asset-item>
          <a-asset-item
            id="wadukJatiluhur"
            src="./models/wadukJatiluhur.glb"
          ></a-asset-item>
          <a-asset-item id="pendopo" src="./models/pendopo.glb"></a-asset-item>
          <a-asset-item
            id="gnParang"
            src="./models/gnParang.glb"
          ></a-asset-item>
          <img id="guide" src="images/guide.png" />
          <img
            id="sechelt"
            crossorigin="anonymous"
            src="images/citySky.jpg"
          ></img>
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
        <a-entity id="musicBg" src="src: #music; autoplay: true"></a-entity>
        <a-entity id="voice_over" src="src: #voiceOver;"></a-entity>
        <a-sky
          id="image-360"
          radius="300"
          src="#sechelt"
          data-set-image-fade-setup="true"
          animation__fade=""
        ></a-sky>
        {/* guide */}
        <a-box
          depth="0.1"
          height="6"
          width="9"
          position="0 1.6 -10"
          material="color: #100244; transparent: true; opacity: 0.94"
        ></a-box>
        <a-text
          value="Petunjuk"
          scale="2 2 2"
          position="0 4 -10.1"
          align="center"
        ></a-text>
        <a-image
          src="#guide"
          width="8"
          height="3"
          position="0 2 -9.9"
        ></a-image>
        <a-entity>
          <a-gltf-model
            src="#gapura"
            rotation="0 90 0"
            position="0 0 -10"
          ></a-gltf-model>
          <a-box
            depth="2"
            width="100"
            height="6"
            position="60.434 1.6 -12.264"
          ></a-box>
          <a-box
            depth="2"
            width="100"
            height="6"
            position="-60.434 1.6 -12.264"
          ></a-box>
        </a-entity>
        <a-gltf-model
          src="#situBuleud"
          rotation="0 180 0"
          position="60 0 -60"
          scale="1.8 1.8 1.8"
        ></a-gltf-model>
        <a-gltf-model
          src="#pendopo"
          rotation="0 -90 0"
          position="50 -0.6 -130"
          scale="3 3 3"
        ></a-gltf-model>
        <a-gltf-model
          src="#wadukJatiluhur"
          rotation="0 90 0"
          position="-60 -0.1 -60"
          scale="5 5 5"
        ></a-gltf-model>
        <a-gltf-model
          src="#gnParang"
          rotation="0 90 0"
          position="-70 -1.1 -160"
          scale="5 5 5"
        ></a-gltf-model>
        <Entity
          primitive="a-box"
          rotation="-90 0 0"
          scale="20 240 0.2"
          position="0 0 -130"
          material={{ color: "black", opacity: 1 }}
        />
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="1000"
          height="1000"
          color="#28822e"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}

export default WisataVR;

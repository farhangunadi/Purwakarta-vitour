import React, { useRef, useEffect, useState } from "react";
import AFRAME from "aframe";
import Image from "next/image";
import Head from "next/head";
import { Entity } from "aframe-react";
import styles from "../../styles/Gameplay.module.css";
import { SideBarNav } from "./SideBarNav/SideBarNav";

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
            src="./models/wadukjatiluhur.glb"
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
        <a-sound id="voice_over" src="src: #voiceOver;"></a-sound>
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
          position="-70 -1.2 -160"
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

import React from "react";
import AFRAME from "aframe";
import * as THREE from "three";
import Head from "next/head";
import { Entity } from "aframe-react";

function WisataVR() {
  return (
    <>
      <Head>
        <script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"></script>
      </Head>
      <a-scene>
        <a-camera id="camera" position="0 1.6 0"></a-camera>
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
        </a-assets>
        <a-gltf-model
          src="#gapura"
          rotation="0 90 0"
          position="0 0 -10"
        ></a-gltf-model>
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
        <a-text value="Hello, World!" position="0 3 0"></a-text>
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

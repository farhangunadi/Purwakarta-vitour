import React from "react";
import AFRAME from "aframe";
import * as THREE from "three";
import Head from "next/head";
import { Entity } from "aframe-react";

function MainMenu() {
  AFRAME.registerComponent("hello-world", {
    init: function () {
      console.log("Hello, World!");
    },
  });
  return (
    <>
      <a-scene>
        {/* <a-camera
          look-controls
          wasd-controls-enabled="acceleration:10"
          id="camera"
          position="0 1.6 0"
        ></a-camera> */}
        <a-camera
          id="camera"
          look-controls="pointerLockEnabled:true"
          position="0 1.6 0"
          rotation="0 90 0"
        >
          <a-cursor></a-cursor>
        </a-camera>
        <a-assets>
          <img id="menu1" src="images/menu (1).png" />
          <img id="menu2" src="images/menu (2).png" />
          <img id="menu3" src="images/menu (3).png" />
          <img id="button" src="images/button.png" />
        </a-assets>
        <a-camera id="camera" position="0 1.6 0"></a-camera>
        <a-image
          src="#menu1"
          width="5"
          height="2.5"
          position="-4.3 1.6 -0.6"
          rotation="0 60 0"
        ></a-image>
        <a-image
          src="#menu2"
          width="6"
          height="3"
          position=" -0.2 2 -2.5"
          rotation="0 0 0"
        ></a-image>
        <a-image
          id="button"
          src="#button"
          width="1.5"
          height="0.5"
          position=" 1.2 1.2 -2.49"
          rotation="0 0 0"
          hello-world
        ></a-image>
        <a-image
          src="#menu3"
          width="4"
          height="2.5"
          position="4.3 1.6 -0.6"
          rotation="0 -60 0"
        ></a-image>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="1000"
          height="1000"
          color="#28822e"
        ></a-plane>
        <a-sky color="#220b34"></a-sky>
      </a-scene>
      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default MainMenu;

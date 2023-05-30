import React, { useState } from "react";
import AFRAME from "aframe";
import * as THREE from "three";
import Head from "next/head";

function MainMenu() {
  // AFRAME.registerComponent("hello-world", {
  //   init: function () {
  //     console.log("Hello, World!");
  //   },
  // });
  AFRAME.registerComponent("show-and-remove-on-click", {
    schema: {
      source: { type: "selector" },
      target1: { type: "selector" },
      target2: { type: "selector" },
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      var audio = document.querySelector("#voiceOver");

      el.addEventListener("click", function () {
        data.source.setAttribute("visible", false);
        data.target1.setAttribute("visible", true);
        data.target2.setAttribute("visible", true);
      });
      el.addEventListener("mouseenter", function () {});
    },
  });
  AFRAME.registerComponent("navigate-on-click", {
    schema: {
      url: { default: "" },
    },
    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener("touchstart", function () {
        window.location.href = data.url;
      });
    },
  });

  return (
    <>
      <Head>
        <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
      </Head>
      <a-scene loading-screen="dotsColor: #24EFAD; backgroundColor: #100244">
        <a-light type="ambient" color="#222222" intensity="0.3"></a-light>
        <a-light
          type="directional"
          position="1 1 1"
          color="#2FA4FF"
          intensity="1"
        ></a-light>
        <a-light
          type="directional"
          position="-1 1 1"
          color="#E90064"
          intensity="1"
          castShadow="true"
        ></a-light>

        <a-camera
          id="camera"
          look-controls="pointerLockEnabled:true"
          position="0 3 0"
          rotation="0 90 0"
          wasd-controls-enabled="false"
        >
          <a-cursor></a-cursor>
        </a-camera>
        <a-assets>
          <img id="menu1" src="images/menu (1).png" />
          <img id="menu2" src="images/menu (2).png" />
          <img id="menu3" src="images/menu (3).png" />
          <img id="button" src="images/button.png" />
          <img id="gameplay" src="images/universe (1).png" />
          <img id="tourist" src="images/universe (2).png" />
          <img id="nightSky" src="images/nightSky.png" />
          <img id="stones" src="images/texture/stones.jpg" />
          <audio id="click" src="music/clik.mp3" autoPlay></audio>
          <a-asset-item id="gapura" src="./models/gapura.glb"></a-asset-item>
        </a-assets>
        <a-gltf-model
          src="#gapura"
          rotation="0 90 0"
          position="0 0 -10"
          scale="1.5 1.5 1.5"
        ></a-gltf-model>
        <a-entity id="menuContainer">
          {/* <a-box
            color="#ffff"
            depth="0.1"
            height="0.5"
            width="1"
            position=" 0 4 -2"
          ></a-box>
          <a-entity
            text="font: mozillavr; value: Play; align:center;width: 4;height:2"
            position=" 0 4.1 -1.9"
            color="#fffff"
          ></a-entity>
          <a-box
            color="#ffff"
            depth="0.1"
            height="0.5"
            width="1"
            position=" 0 3 -2"
          ></a-box>
          <a-entity
            text="font: mozillavr; value: Play; align:center;width: 4;height:2"
            position=" 0 3.1 -1.7"
            color="#fffff"
          ></a-entity> */}
          <a-box
            color="#FFD95A"
            depth="0.1"
            height="0.5"
            width="1"
            position=" 1.2 2.8 -2.49"
            event-set__onMouseEnter="_event:mouseenter;color:#27E1C1;"
            event-set__onMouseLeave="_event:mouseleave;color:#FFD95A;"
            show-and-remove-on-click="source: #menuContainer; target1: #museum; target2: #touristTour;"
          ></a-box>
          <a-entity
            text="font: mozillavr; value: Play; align:center;width: 4;height:2"
            position=" 1.2 2.9 -2.4"
            color="#fffff"
          ></a-entity>
          {/* <a-image
            id="button"
            src="#button"
            width="1.5"
            height="0.5"
            position=" 1.2 2.6 -2.49"
            rotation="0 0 0"
            show-and-remove-on-click="source: #menuContainer; target1: #museum; target2: #touristTour;"
          ></a-image> */}
          <a-image
            src="#menu1"
            width="5"
            height="2.5"
            position="-4.3 3 -0.6"
            rotation="0 60 0"
          ></a-image>
          <a-image
            src="#menu2"
            width="6"
            height="3"
            position=" -0.2 3.5 -2.5"
            rotation="0 0 0"
          ></a-image>

          <a-image
            src="#menu3"
            width="4"
            height="2.5"
            position="4.3 3 -0.6"
            rotation="0 -60 0"
          ></a-image>
        </a-entity>
        <a-entity id="link-to-world">
          {/* <a-entity link="href: /gemplay; title: Museum Tour; image: #gameplay"></a-entity>
          <a-entity link="href: /tourist; title: Tourist Tour; image: #tourist"></a-entity> */}
          <a-link
            id="museum"
            highlighted="true"
            href="/gameplay"
            title="Museum Tour"
            image="#gameplay"
            position="2 3 -3"
            width="2"
            height="2"
            visible="false"
          ></a-link>
          <a-link
            id="touristTour"
            href="/tourist"
            title="Tourist Tour"
            image="#tourist"
            position="-2 3 -3"
            width="5"
            height="5"
            visible="false"
          ></a-link>
        </a-entity>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="1000"
          height="1000"
          src="#stones"
          repeat="20 20"
          offset="0.5 0.5"
        ></a-plane>

        <a-sky
          id="image-360"
          radius="200"
          src="#nightSky"
          data-set-image-fade-setup="true"
          animation__fade=""
        ></a-sky>
      </a-scene>
      <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    </>
  );
}

export default MainMenu;

import React from "react";
import AFRAME from "aframe";
import { Entity, Scene } from "aframe-react";

function VRgameplay() {
  return (
    <Scene>
      <a-camera position="0 1 0" rotation="0 90 0">
        <a-cursor></a-cursor>
      </a-camera>
      <a-assets>
        <a-asset-item
          id="frontMuseum"
          src="./models/FrontMuseum.glb"
        ></a-asset-item>
      </a-assets>

      <Entity primitive="a-cylinder" color="blue" position="2 0 -3" />
      <Entity
        primitive="a-plane"
        rotation="-90 0 0"
        height="1000"
        width="1000"
        material={{ color: "#215763", opacity: 0.7 }}
      />
      <Entity gltf-model="#frontMuseum" />
    </Scene>
  );
}

export default VRgameplay;

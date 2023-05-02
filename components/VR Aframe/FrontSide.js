import React from "react";
import { Entity, Scene } from "aframe-react";

export const FrontSide = () => {
  return (
    <>
      <a-assets>
        <a-asset-item id="lampion" src="./models/lampion.glb"></a-asset-item>
        <a-asset-item id="pager" src="./models/pagar.glb"></a-asset-item>
        <a-asset-item id="pohon" src="./models/tree_lowpoly.glb"></a-asset-item>
        <a-asset-item id="gedung1" src="./models/gedung1.glb"></a-asset-item>
        <a-asset-item id="gedung2" src="./models/gedung2.glb"></a-asset-item>
        <a-asset-item id="gedung3" src="./models/gedung3.glb"></a-asset-item>
        <a-asset-item id="gedung4" src="./models/gedung4.glb"></a-asset-item>
        <a-asset-item id="gedung5" src="./models/gedung5.glb"></a-asset-item>
        <a-asset-item id="gedung6" src="./models/gedung6.glb"></a-asset-item>
        <a-asset-item id="gedung7" src="./models/gedung7.glb"></a-asset-item>
      </a-assets>

      {/* lampion */}
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -5"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -10"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -15"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -20"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -25"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -30"
      />
      <Entity
        gltf-model="#lampion"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="0 0 -35"
      />

      {/* Pager */}
      <Entity
        gltf-model="#pager"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="-5 0 -20"
      />
      <Entity
        gltf-model="#pager"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="5 0 -20"
      />

      {/* Jalan */}
      <Entity
        primitive="a-box"
        rotation="-90 0 0"
        scale="20 70 0.2"
        position="0 0 -4"
        material={{ color: "black", opacity: 1 }}
      />
      <Entity
        primitive="a-box"
        rotation="-90 0 0"
        scale="80 10 0.2"
        position="0 0 30"
        material={{ color: "black", opacity: 1 }}
      />
      <Entity
        primitive="a-box"
        rotation="-90 0 0"
        scale="10 80 0.2"
        position="35 0 -15"
        material={{ color: "black", opacity: 1 }}
      />
      <Entity
        primitive="a-box"
        rotation="-90 0 0"
        scale="10 80 0.2"
        position="-35 0 -15"
        material={{ color: "black", opacity: 1 }}
      />
      {/* Pohon */}
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 0"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -5"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -10"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -15"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -20"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -25"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="10 0 -30"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 0"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -5"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -10"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -15"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -20"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -25"
      />
      <Entity
        gltf-model="#pohon"
        rotation="0 90 0"
        scale="5 5 5"
        position="-10 0 -30"
      />

      {/* gedung */}
      <Entity
        gltf-model="#gedung1"
        rotation="0 90 0"
        scale="4 4 4"
        position="-55 0 25"
      />
      <Entity
        gltf-model="#gedung2"
        rotation="0 90 0"
        scale="4 4 4"
        position="-55 0 8"
      />
      <Entity
        gltf-model="#gedung3"
        rotation="0 90 0"
        scale="4 4 4"
        position="-55 0 -8"
      />
      <Entity
        gltf-model="#gedung4"
        rotation="0 90 0"
        scale="4 4 4"
        position="-55 0 -55"
      />
      <Entity
        gltf-model="#gedung5"
        rotation="0 -90 0"
        scale="3 3 3"
        position="55 -0.2 25"
      />
      <Entity
        gltf-model="#gedung6"
        rotation="0 -90 0"
        scale="3 3 3"
        position="55 -0.2 -10"
      />
      <Entity
        gltf-model="#gedung7"
        rotation="0 -90 0"
        scale="3 3 3"
        position="55 -0.2 -50"
      />
    </>
  );
};

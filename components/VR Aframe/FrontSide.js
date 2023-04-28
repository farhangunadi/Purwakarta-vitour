import React from "react";
import { Entity, Scene } from "aframe-react";

export const FrontSide = () => {
  return (
    <>
      <a-assets>
        <a-asset-item id="lampion" src="./models/lampion.glb"></a-asset-item>
        <a-asset-item id="pager" src="./models/pagar.glb"></a-asset-item>
        <a-asset-item id="pohon" src="./models/tree_lowpoly.glb"></a-asset-item>
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
        scale="20 50 0.2"
        position="0 0 -15"
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
    </>
  );
};

import React from "react";
import { Scene } from "aframe-react";

export const FrontSide = () => {
  const lampionPosition = [
    "0 0 -5",
    "0 0 -10",
    "0 0 -15",
    "0 0 -20",
    "0 0 -25",
    "0 0 -30",
    "0 0 -35",
  ];
  const treePosition = [
    "10 0 -5",
    "10 0 -10",
    "10 0 -15",
    "10 0 -20",
    "10 0 -25",
    "10 0 -30",
    "10 0 -35",
    "-10 0 -5",
    "-10 0 -10",
    "-10 0 -15",
    "-10 0 -20",
    "-10 0 -25",
    "-10 0 -30",
    "-10 0 -35",
  ];

  const gedung = [
    { gedung: "#gedung1", position: "-55 0 25", scale: "4 4 4" },
    { gedung: "#gedung2", position: "-55 0 8", scale: "4 4 4" },
    { gedung: "#gedung3", position: "-55 0 -8", scale: "4 4 4" },
    { gedung: "#gedung4", position: "-55 0 -55", scale: "4 4 4" },
    { gedung: "#gedung5", position: "55 -0.2 25", scale: "3 3 3" },
    { gedung: "#gedung6", position: "55 -0.2 -10", scale: "3 3 3" },
    { gedung: "#gedung7", position: "55 -0.2 -50", scale: "3 3 3" },
  ];
  return (
    <>
      <a-assets>
        <a-asset-item id="lampion" src="./models/lampion.glb"></a-asset-item>
        <a-asset-item id="pager" src="./models/pagar.glb"></a-asset-item>
        <a-asset-item id="pohon" src="./models/tree.glb"></a-asset-item>
        <a-asset-item id="gedung1" src="./models/gedung1.glb"></a-asset-item>
        <a-asset-item id="gedung2" src="./models/gedung2.glb"></a-asset-item>
        <a-asset-item id="gedung3" src="./models/gedung3.glb"></a-asset-item>
        <a-asset-item id="gedung4" src="./models/gedung4.glb"></a-asset-item>
        <a-asset-item id="gedung5" src="./models/gedung5.glb"></a-asset-item>
        <a-asset-item id="gedung6" src="./models/gedung6.glb"></a-asset-item>
        <a-asset-item id="gedung7" src="./models/gedung7.glb"></a-asset-item>
      </a-assets>

      {lampionPosition.map((lampion) => (
        <a-gltf-model
          src="#lampion"
          rotation="0 90 0"
          scale="0.5 0.5 0.5"
          position={lampion}
        ></a-gltf-model>
      ))}
      {/* lampion */}
      {lampionPosition.map((lampion) => (
        <a-gltf-model
          src="#lampion"
          rotation="0 90 0"
          scale="0.5 0.5 0.5"
          position={lampion}
        ></a-gltf-model>
      ))}

      {/* Pager */}
      <a-gltf-model
        src="#pager"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="-5 0 -20"
      ></a-gltf-model>
      <a-gltf-model
        src="#pager"
        rotation="0 90 0"
        scale="0.5 0.5 0.5"
        position="5 0 -20"
      ></a-gltf-model>

      {/* Jalan */}
      <a-box
        rotation="-90 0 0"
        scale="20 70 0.2"
        position="0 0 -4"
        color="black"
      ></a-box>
      <a-box
        rotation="-90 0 0"
        scale="80 10 0.2"
        position="0 0 30"
        color="black"
      ></a-box>
      <a-box
        rotation="-90 0 0"
        scale="10 80 0.2"
        position="35 0 -15"
        color="black"
      ></a-box>
      <a-box
        rotation="-90 0 0"
        scale="10 80 0.2"
        position="-35 0 -15"
        color="black"
      ></a-box>

      {/* Pohon */}
      {treePosition.map((tree) => (
        <a-gltf-model
          src="#pohon"
          rotation="0 90 0"
          scale="4 4 4"
          position={tree}
        ></a-gltf-model>
      ))}

      {/* gedung */}
      {gedung.map((setGedung) => (
        <a-gltf-model
          src={setGedung.gedung}
          rotation="0 90 0"
          scale={setGedung.scale}
          position={setGedung.position}
        ></a-gltf-model>
      ))}
    </>
  );
};

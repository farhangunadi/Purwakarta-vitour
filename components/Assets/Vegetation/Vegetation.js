import React from "react";
import { Bookcase } from "../../Basic Compt/Bookcase";
import { Box } from "../../Basic Compt/Box";
import { PalmTree } from "../../Basic Compt/Palm-tree";
import { ShortPalmTree } from "../../Basic Compt/Short-palm-tree";
import { TreeLowPoly } from "../../Basic Compt/Tree_lowpoly";
import { Gedung1 } from "../Gedung/Gedung1";
import { Gedung2 } from "../Gedung/Gedung2";
import { Gedung3 } from "../Gedung/Gedung3";
import { Gedung4 } from "../Gedung/Gedung4";
import { Gedung5 } from "../Gedung/Gedung5";
import { Gedung6 } from "../Gedung/Gedung6";
import { Gedung7 } from "../Gedung/Gedung7";

export const Vegetation = () => {
  return (
    <group>
      <group>
        <TreeLowPoly scale={5} position={[0, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[5, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[10, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[15, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[20, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[25, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[30, -0.09, 10]} />
        <TreeLowPoly scale={5} position={[35, -0.09, 10]} />
      </group>
      <group>
        <TreeLowPoly scale={5} position={[0, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[5, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[10, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[15, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[20, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[25, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[30, -0.09, -10]} />
        <TreeLowPoly scale={5} position={[35, -0.09, -10]} />
      </group>
      <group>
        <Box position={[70, 0, -100]} args={[300, 15, 5]} />
        <Box
          position={[-50, 0, 0]}
          args={[300, 15, 5]}
          rotation={[0, Math.PI / -2, 0]}
        />
        <Box
          position={[160, 0, 0]}
          args={[300, 15, 5]}
          rotation={[0, Math.PI / -2, 0]}
        />
        <Box position={[70, 0, 100]} args={[300, 15, 5]} />
      </group>
      <group>
        <Box
          position={[-40, 0, -10]}
          args={[80, 0.01, 5]}
          rotation={[0, Math.PI / -2, 0]}
          color="black"
        />
        <Box position={[12, 0, -46]} args={[100, 0.01, 8]} color="black" />
        <Box position={[33, 0, 26]} args={[150, 0.01, 8]} color="black" />
        <Gedung1 scale={4} position={[0, 0, -60]} />
        <Gedung4 scale={4} position={[35, 0, -60]} />
        <Gedung6 scale={2.3} position={[-23, -0.2, -60]} />
        <Gedung2 scale={4} position={[-5, 0, 40]} rotation={[0, Math.PI, 0]} />
        <Gedung3
          scale={3.5}
          position={[-23, 0, 40]}
          rotation={[0, Math.PI, 0]}
        />
        <Gedung5
          scale={2.3}
          position={[20, -0.2, 40]}
          rotation={[0, Math.PI, 0]}
        />
        <Gedung7
          scale={2.3}
          position={[50, -0.2, 40]}
          rotation={[0, Math.PI, 0]}
        />
        <Gedung1
          scale={4}
          position={[70, -0.2, 40]}
          rotation={[0, Math.PI, 0]}
        />
        <Gedung2
          scale={4}
          position={[90, -0.2, 40]}
          rotation={[0, Math.PI, 0]}
        />
      </group>
      <group>
        <PalmTree scale={2} position={[110, -0.1, -6]} />
        <ShortPalmTree
          scale={1.8}
          rotation={[0, Math.PI / 2, 0]}
          position={[105, -0.1, -6]}
        />
        <PalmTree scale={2.3} position={[102, -0.2, -6]} />
        <PalmTree scale={2} position={[110, -0.1, 5.5]} />
        <ShortPalmTree
          scale={1.8}
          rotation={[0, Math.PI / 2, 0]}
          position={[105, -0.1, 5.5]}
        />
        <PalmTree scale={2.3} position={[102, -0.2, 5.5]} />
      </group>
      <group>
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 0, 7]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 0, 4.5]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 2.5, 7]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 2.5, 4.5]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI, 0]}
          position={[95, 0, 8]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI, 0]}
          position={[97.5, 0, 8]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI, 0]}
          position={[95, 2.5, 8]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI, 0]}
          position={[97.5, 2.5, 8]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 0, -7]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 0, -5]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 2.5, -7]}
        />
        <Bookcase
          scale={1.3}
          rotation={[0, Math.PI / 2, 0]}
          position={[92.5, 2.5, -5]}
        />
      </group>
    </group>
  );
};

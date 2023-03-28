import { Environment, Sky } from "@react-three/drei";
import Head from "next/head";
import { FrontMuseum } from "../components/Assets/FrontMuseum";
import { PintuMasuk } from "../components/Assets/Pintu Masuk/PintuMasuk";
import { SideMuseum } from "../components/Assets/SideMuseum";
import { TembokInfo } from "../components/Assets/TembokInfo";
import { TembokInfo2 } from "../components/Assets/TembokInfo2";
import { Vegetation } from "../components/Assets/Vegetation/Vegetation";
import BaseCharacter from "../components/UI/BaseCharacter";
import { BaseScene } from "../components/UI/BaseScene";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Gameplay.module.css";

export default function Home() {
  return (
    <>
      <BaseScene>
        <BaseCharacter
          controls
          args={[1.5]}
          color="yellow"
          position={[-10, 5, 0]}
        />
        <FrontMuseum position={[0, 0, 0]} />
        <TembokInfo
          rotation={[0, Math.PI / -2, 0]}
          position={[65, 0, -6]}
          scale={0.9}
        />
        <TembokInfo2
          position={[65, 0, 6]}
          rotation={[0, Math.PI, 0]}
          scale={0.9}
        />
        <SideMuseum
          rotation={[0, Math.PI / -2, 0]}
          position={[89, 0.02, -38]}
          scale={2.6}
        />
        <PintuMasuk />
        <Vegetation />
        <Sky sunPosition={[0, 10, 0]} azimuth={0.25} inclination={0} />
        <Environment files="./environment/studio_garden_2k.hdr" />
      </BaseScene>
      <div className={styles.dot}></div>
      <div className={styles.back}>
        <a href="/" className={styles.backBtn}>
          Back
        </a>
      </div>
    </>
  );
}

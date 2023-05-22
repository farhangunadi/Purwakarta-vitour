import React from "react";
import SplashScreen from "../components/VR Aframe/Splash Screen/SplashScreen";
import { Head } from "next/document";

function MyApp({ Component, pageProps }) {
  //   <Head>
  //     <link rel="stylesheet" href="/styles/global.css" />
  //   </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;

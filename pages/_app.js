import React from "react";
import { Head } from "next/document";
import App from "next/app";
import "../styles/styles.css";

class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div style={{ margin: 0 }}>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default _App;

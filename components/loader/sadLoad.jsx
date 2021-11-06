import React, { useEffect, useState } from "react";
import * as sadloader from "./sadLoader.json";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: sadloader.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function SadLoader() {
  return (
    <>
      <FadeIn>
        <div style={{ display: "flex" }}>
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
      </FadeIn>
    </>
  );
}

import React, { useEffect, useState } from "react";
import * as loadingData from "./onlyload.json";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loader() {
  return (
    <div className="flex w-screen h-screen items-center justify-center ">
      <FadeIn>
        <Lottie options={defaultOptions} height={300} width={350} />
      </FadeIn>
    </div>
  );
}

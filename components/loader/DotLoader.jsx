import React, { useEffect, useState } from "react";
import * as dotloader from "./dotloader.json";
import * as successData from "./success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dotloader.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function DotLoader({ loading }) {
  return (
    <>
      <FadeIn>
        <div style={{ display: "flex" }}>
          {loading && (
            <>
              <Lottie options={defaultOptions} height={250} width={250} />
            </>
          )}
        </div>
      </FadeIn>
    </>
  );
}

import React, { useEffect, useState } from "react";
import * as loadingData from "./loading.json";
import * as successData from "./success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: successData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

export default function LoadComponent({loading}) {
    return (
        <>
        <FadeIn   >
            <div style={{ display: "flex" }}>
              
              {loading ? (<>
                <Lottie options={defaultOptions} height={500} width={500} />
              </>
              ) : (
                <>
                <Lottie options={defaultOptions2} height={150} width={150} />
              </>
              )}
            </div>
          </FadeIn>
        </>
    )
}

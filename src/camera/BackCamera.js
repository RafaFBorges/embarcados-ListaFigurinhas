import React, { useState } from "react";
import { Camera } from "expo-camera";

function BackCamera() {
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  return <Camera style={{ flex: 1 }} type={cameraType} />;
}

export default BackCamera;

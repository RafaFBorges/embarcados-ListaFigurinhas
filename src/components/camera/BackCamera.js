import React, { useState } from "react";
import { Camera } from "expo-camera";

function BackCamera() {
  return <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} />;
}

export default BackCamera;

import React from "react";
import { StyleSheet } from "react-native";
import { Camera } from "expo-camera";

function BackCamera() {
  return <Camera style={styles.camera} type={Camera.Constants.Type.back} />;
}

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default BackCamera;

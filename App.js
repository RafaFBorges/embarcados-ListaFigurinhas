import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function App() {
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  }, []);

  if (hasPermission == null) {
    // tela de espera
    return <View />;
  }

  if (hasPermission === false) {
    // usuaria não permitiu
    return <Text>Aceite utilizar a camera para utilizar o aplicativo</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }} type={cameraType} />
      <StatusBar style={{ backgroundColor: "#ffffff" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

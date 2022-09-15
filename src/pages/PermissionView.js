import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, View, Image } from "react-native";
import PrimaryButton from "../components/button/PrimaryButton";
import BasicText from "../text/BasicText";

import welcome from "../../assets/welcome.png";

function PermissionView({ setHasPermission }) {
  useEffect(() => {
    (async () => {
      askPermission();
    })();
  }, []);

  const askPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status == "granted");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={welcome}
          resizeMode={"contain"}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <BasicText>Aceite utilizar a camera para utilizar o aplicativo</BasicText>
      <PrimaryButton action={askPermission} style={styles.button}>
        Permitir
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    marginTop: 64,
    width: "100%",
  },
  button: {
    marginBottom: 96,
  },
});

export default PermissionView;

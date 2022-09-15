import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { View, Text } from "react-native";
import PrimaryButton from "../components/button/PrimaryButton";

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
    <View>
      <Text>Aceite utilizar a camera para utilizar o aplicativo</Text>
      <PrimaryButton action={askPermission}>Permitir</PrimaryButton>
    </View>
  );
}

export default PermissionView;

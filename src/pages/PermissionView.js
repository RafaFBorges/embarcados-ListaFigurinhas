import React, { useEffect } from "react";
import { Camera } from "expo-camera";
import { View, Text } from "react-native";

function PermissionView({ hasPermission, setHasPermission }) {
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
}

export default PermissionView;

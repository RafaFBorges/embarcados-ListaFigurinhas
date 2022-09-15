import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import PermissionView from "./src/pages/PermissionView";
import CameraView from "./src/pages/CameraView";

function App() {
  const [hasPermission, setHasPermission] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      {hasPermission == null || hasPermission == false ? (
        <PermissionView setHasPermission={(value) => setHasPermission(value)} />
      ) : (
        <CameraView />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;

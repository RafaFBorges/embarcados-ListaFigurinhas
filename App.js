import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import PermissionView from "./src/pages/PermissionView";
import BackCamera from "./src/components/camera/BackCamera";

function App() {
  const [hasPermission, setHasPermission] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      {hasPermission == null || hasPermission == false ? (
        <PermissionView setHasPermission={(value) => setHasPermission(value)} />
      ) : (
        <BackCamera />
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

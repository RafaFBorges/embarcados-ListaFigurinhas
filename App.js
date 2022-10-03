import React, { useState } from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";

import { InfoProvider } from "./src/context/GlobalContext";
import PermissionView from "./src/pages/PermissionView";
import PrincipalRoute from "./src/routes/PrincipalRoute";

function App() {
  const [hasPermission, setHasPermission] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.4)"
        translucent={true}
        animated={true}
        barStyle="light-content"
        hidden={false}
      />
      {hasPermission == null || hasPermission == false ? (
        <PermissionView setHasPermission={(value) => setHasPermission(value)} />
      ) : (
        <InfoProvider>
          <PrincipalRoute />
        </InfoProvider>
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

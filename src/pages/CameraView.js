import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import BackCamera from "../components/camera/BackCamera";
import IconButton from "../components/button/IconButton";

function FigurinhasView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <IconButton
          style={styles.userButton}
          action={() => {
            navigation.navigate("Figurinhas");
          }}
        >
          <Feather name="user" size={24} color="black" />
        </IconButton>
        <IconButton style={styles.cameraButton}>
          <Feather name="camera" size={48} color="black" />
        </IconButton>
      </View>
      <BackCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#654321",
  },
  buttonContainer: {
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 64,
    zIndex: 1,
  },
  userButton: {
    position: "absolute",
    right: 32,
  },
});

export default FigurinhasView;

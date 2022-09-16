import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import IconButton from "../button/IconButton";

function PictureModal({ picture, closeModal }) {
  return (
    <View style={styles.modal}>
      <IconButton style={styles.backButton} action={closeModal}>
        <Feather name="arrow-left" size={24} color="black" />
      </IconButton>
      <Image style={styles.picture} source={{ uri: picture }} />
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#450912",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    zIndex: 2,
  },
  picture: {
    flex: 1,
  },
});

export default PictureModal;

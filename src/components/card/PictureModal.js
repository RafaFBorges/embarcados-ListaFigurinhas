import React from "react";
import { StyleSheet, FlatList, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import IconButton from "../button/IconButton";
import BasicText from "../../text/BasicText";

function PictureModal({ picture, closeModal, menssagem }) {
  return (
    <View style={styles.modal}>
      <IconButton style={styles.backButton} action={closeModal}>
        <Feather name="arrow-left" size={24} color="black" />
      </IconButton>
      <View style={styles.responseContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={menssagem}
          renderItem={({ item, index }) => {
            return (
              <BasicText key={index} style={styles.responseText}>
                {item}
              </BasicText>
            );
          }}
        />
      </View>
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
  responseContainer: {
    alignContent: "center",
    alignSelf: "center",
    boxSizing: "border-box",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 10,
    position: "absolute",
    zIndex: 1,
    bottom: 16,
    width: "90%",
    minHeight: 150,
    justifyContent: "center",
  },
  responseText: {
    alignSelf: "center",
  },
  list: {
    flexGrow: 1,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default PictureModal;

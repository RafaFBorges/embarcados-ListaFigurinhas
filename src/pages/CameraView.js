import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import BackCamera from "../components/camera/BackCamera";
import IconButton from "../components/button/IconButton";
import PictureModal from "../components/card/PictureModal";

function FigurinhasView() {
  const camRef = useRef(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [picture, setPicture] = useState(null);
  const [isShowModal, setShowModal] = useState(false);

  const navigateToFigurinhas = () => {
    navigation.navigate("Figurinhas");
  };

  const takePicture = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setPicture(data.uri);
      setShowModal(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <IconButton style={styles.userButton} action={navigateToFigurinhas}>
            <Feather name="user" size={24} color="black" />
          </IconButton>
          <IconButton style={styles.cameraButton} action={takePicture}>
            <Feather name="camera" size={48} color="black" />
          </IconButton>
        </View>
        {isFocused && <BackCamera camRef={camRef} />}
      </View>
      {isShowModal && (
        <PictureModal
          picture={picture}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
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

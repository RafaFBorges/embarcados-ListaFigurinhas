import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { markAsUnavailable } from "../services/Figurinhas";
import { GlobalContext } from "../context/GlobalContext";

import BackCamera from "../components/camera/BackCamera";
import IconButton from "../components/button/IconButton";
import PictureModal from "../components/card/PictureModal";

function FigurinhasView() {
  const { data, setData } = useContext(GlobalContext);
  const camRef = useRef(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [picture, setPicture] = useState(null);
  const [isShowModal, setShowModal] = useState(false);
  const [menssagem, setMenssagem] = useState(["Aguardando resposta..."]);

  const navigateToFigurinhas = () => {
    navigation.navigate("Figurinhas");
  };

  const takePicture = async (setNewData) => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setPicture(data.uri);
      setShowModal(true);

      let localUri = data.uri;
      let filename = localUri.split("/").pop();
      console.log(`LocalUri: ${localUri}`);
      console.log(`FileName: ${filename}`);
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      console.log(`Type: ${type}`);
      let formData = new FormData();
      formData.append("photo", { uri: localUri, name: filename, type });
      console.log(formData);

      fetch("http://192.168.1.2:8000/imagem", {
        method: "POST",
        body: formData,
        header: {
          "content-type": "multipart/form-data",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.faltando.length == 0) setNewData(json.faltando);
          else setData(["Nada foi encontrado!!"]);
          
          const updated = data.map((fig) => {
            for (let i = 0; i < json.faltando.length; i++)
              if (fig.cod == json.faltando[i]) {
                fig.hasSticker = 1;
                break;
              }
          });
          setData(updated);
        })
        .catch((err) => console.error("não conseguiu buscar no servidor"));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <IconButton style={styles.userButton} action={navigateToFigurinhas}>
            <Feather name="user" size={24} color="black" />
          </IconButton>
          <IconButton
            style={styles.cameraButton}
            action={() => takePicture(setMenssagem)}
          >
            <Feather name="camera" size={48} color="black" />
          </IconButton>
        </View>
        {isFocused && <BackCamera camRef={camRef} />}
      </View>
      {isShowModal && (
        <PictureModal
          picture={picture}
          closeModal={() => {
            setShowModal(false);
            setMenssagem(["Aguardando resposta..."]);
          }}
          menssagem={menssagem}
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

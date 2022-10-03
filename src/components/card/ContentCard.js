import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

import BasicText from "../../text/BasicText";

function ContentCard({ style, name, cod, hasSticker, image }) {
  const { figs } = useContext(GlobalContext);
  //   <View style={styles.border}>
  //   <Feather name="user" size={78} color="black" />
  // </View>
  return (
    <View
      style={[
        styles.container,
        style,
        hasSticker == 1 ? styles.selected : null,
      ]}
    >
      <Image style={styles.image} resizeMode={"contain"} source={image} />
      <BasicText
        style={[styles.name, hasSticker == 1 ? styles.selectedText : null]}
      >
        {name}
      </BasicText>
      <BasicText
        style={[styles.cod, hasSticker == 1 ? styles.selectedText : null]}
      >
        {cod}
      </BasicText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    borderRadius: 10,
    width: "48%",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#92AF88",
  },
  selectedText: {
    color: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: 160,
  },
  border: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    paddingTop: 32,
    borderColor: "#B4B3B3",
    borderRadius: 10,
    borderWidth: 1,
  },
  name: {
    fontWeight: "bold",
    marginTop: 4,
  },
  cod: {
    fontSize: 12,
    marginTop: 4,
    color: "#B4B3B3",
  },
});

export default ContentCard;

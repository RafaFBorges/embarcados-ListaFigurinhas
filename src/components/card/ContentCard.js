import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import BasicText from "../../text/BasicText";

function ContentCard({ style, name, cod }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.border}>
        <Feather name="user" size={78} color="black" />
      </View>
      <BasicText style={styles.name}>{name}</BasicText>
      <BasicText style={styles.cod}>{cod}</BasicText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '48%',
    height: 220,
    justifyContent: "center",
    alignItems: "center",
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

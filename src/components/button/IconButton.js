import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function IconButton({ children, action, style, isMini }) {
  const actualStyle = isMini ? mini : styles;

  return (
    <TouchableOpacity style={[actualStyle.button, style]} onPress={action}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});

const mini = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
});

export default IconButton;

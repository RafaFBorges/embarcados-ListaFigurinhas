import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function IconButton({ children, action, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={action}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});

export default IconButton;

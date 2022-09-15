import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BasicText from "../../text/BasicText";

function PrimaryButton({ children, action, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={action}>
      <BasicText style={styles.buttonText}>{children}</BasicText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#92AF88',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 12, 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;

import React from "react";
import { Text, TouchableOpacity } from "react-native";

function PrimaryButton({ children, action }) {
  return (
    <TouchableOpacity onPress={action()}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import IconButton from "../button/IconButton";

function BasicTextInput({
  style,
  children,
  text,
  setText,
  hasFilter,
  filterAction,
}) {
  const refInput = useRef(null);
  const containerStyle = children == null ? styles : withIcon;

  const getFocus = () => {
    refInput.current.focus();
  };

  return (
    <View style={[styles.container, style]} onPress={getFocus}>
      {children}
      <View style={containerStyle.inputContainer}>
        <TextInput
          placeholder="Pesquisar"
          ref={refInput}
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
      </View>
      {hasFilter && (
        <IconButton isMini style={styles.filter} action={() => filterAction()}>
          <Feather name="filter" size={16} color="black" />
        </IconButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 100,
    backgroundColor: "#E5E4E1",
  },
  inputContainer: {
    flex: 1,
  },
  inputContainerWithIcon: {
    flex: 1,
    marginLeft: 8,
  },
  input: {
    width: "100%",
  },
  filter: {
    marginLeft: 8,
  },
});

const withIcon = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginLeft: 8,
  },
});

export default BasicTextInput;

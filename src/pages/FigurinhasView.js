import React, { useState, useEffect, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import IconButton from "../components/button/IconButton";
import BasicText from "../text/BasicText";
import BasicTextInput from "../components/input/TextInput";
import ContentCard from "../components/card/ContentCard";
import { GlobalContext } from "../context/GlobalContext";

function FigurinhasView() {
  const { data } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [list, setList] = useState(data);
  const navigation = useNavigation();

  useEffect(() => {
    setList(
      data.filter((item) => {
        return item.name.includes(search) || item.cod.includes(search);
      })
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.backButton}
        action={() => {
          navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={24} color="black" />
      </IconButton>
      <BasicText style={styles.title}>Meu álbum</BasicText>
      <BasicTextInput text={search} setText={setSearch} style={styles.input}>
        <Feather name="search" size={24} color="black" />
      </BasicTextInput>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        style={styles.listArea}
        data={list}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <ContentCard
              key={item.cod}
              name={item.name}
              cod={item.cod}
              hasSticker={item.hasSticker}
              image={item.image}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flex: 1,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 48,
  },
  title: {
    marginTop: 32,
    fontWeight: "bold",
  },
  input: {
    marginTop: 16,
  },
  listArea: {
    marginTop: 24,
  },
});

export default FigurinhasView;

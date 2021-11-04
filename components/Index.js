import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import IntroText from "./IntroText.js";
import ModalAlert from "./ModalAlert.js";

function Index() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setTextValue(value);
  };

  const handleAddItem = () => {
    const item = {
      value: textValue,
      id: Math.random().toString(),
    };
    setItemList([...itemList, item]);
    setTextValue("");
  };

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  const handleRemoveConfirm = () => {
    const newList = itemList.filter((item) => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  };

  return (
    <View style={styles.screen}>
      <IntroText />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          onChangeText={handleChangeText}
          value={textValue}
        />
      </View>
      <View style={styles.button}>
        <Pressable onPress={handleAddItem}>
          <Text style={{color: 'white'}}> Valoriza tu depa </Text>
        </Pressable>
      </View>
      <View style={styles.items}>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <View style={styles.item} key={data.item.id}>
              <Text>{data.item.value}</Text>
              <Button
                style={styles.button}
                title="X"
                onPress={() => handleRemoveItem(data.item.id)}
              />
            </View>
          )}
        />
      </View>
      <ModalAlert modalVisible={modalVisible} itemSelected={itemSelected} handleRemoveConfirm={handleRemoveConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    backgroundColor: "#ECECEC",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 45,
    backgroundColor: "#24A9EB",
    marginTop: 30,
    padding: 10,
  },
});

export default Index;

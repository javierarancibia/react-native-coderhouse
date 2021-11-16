import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import ModalAlert from "./ModalAlert.js";

const ApartmentProfile = (props) => {
  console.log(props.apartment);

  const [modalVisible, setModalVisible] = useState(false);

  const handleRemoveItem = () => {
    setModalVisible(true);
  };

  const handleRemoveConfirm = () => {
    props.onGetApartment("");
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Perfil Apartamento</Text>
      <Text>Superficie: {props.apartment.area}</Text>
      <Text>Dormitorios: {props.apartment.bedroomTotal}</Text>
      <Text>Baños: {props.apartment.bathroomTotal}</Text>
      <Text>Ciudad: {props.apartment.city}</Text>

      <View style={styles.button}>
        <Pressable onPress={handleRemoveItem}>
          <Text style={{ color: "white" }}> Reingresa otro </Text>
        </Pressable>
      </View>
      <ModalAlert
        modalVisible={modalVisible}
        handleRemoveConfirm={handleRemoveConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
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
  text: {
    alignItems: "center",
    color: "#24A9EB",
    fontSize: 25,
    marginBottom: 35,
    fontFamily: 'Lato-Regular'
  },
});

export default ApartmentProfile;

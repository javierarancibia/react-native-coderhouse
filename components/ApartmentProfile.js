import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
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
      <Image
          source={require("../assets/buildings.png")}
          style={{
            width: 210,
            height: 210,
          }}
        />
      <Text style={styles.title}>Perfil Apartamento</Text>
      <View>
        <Text style={styles.text}>Superficie: {props.apartment.area} m2</Text>
        <Text style={styles.text}>Dormitorios: {props.apartment.bedroomTotal}</Text>
        <Text style={styles.text}>Baños: {props.apartment.bathroomTotal}</Text>
        <Text style={styles.text}>Ciudad: {props.apartment.city}</Text>
      </View>


      <View style={styles.button}>
        <Pressable onPress={handleRemoveItem}>
          <Text style={{ color: "white" }}>Chequear valor </Text>
        </Pressable>
      </View>
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
  title: {
    alignItems: "center",
    color: "#24A9EB",
    fontSize: 25,
    marginBottom: 35,
    fontFamily: 'Lato-Regular'
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default ApartmentProfile;

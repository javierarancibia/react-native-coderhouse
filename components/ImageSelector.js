import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from 'react-redux'
// import * as Permissions from "expo-permissions";
import { saveImage } from "../store/actions/recipes.actions";

const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState(null);
  const dispatch = useDispatch()

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.onImage(image.uri);
    // dispatch(saveImage(image.uri))
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button
        title="Tomar Foto"
        style={styles.button}
        color={"orange"}
        onPress={handlerTakeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    borderColor: "blue",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelector;

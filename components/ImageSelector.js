import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from 'react-redux'
import { saveImage } from "../store/actions/recipes.actions";  
// import * as Permissions from "expo-permissions";


const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();
  const dispatch = useDispatch()

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(props.imageUrl)

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
    pickedUri && dispatch(saveImage(pickedUri, props.itemId))
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {/* {!pickedUri ? ( */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        {/* ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )} */}
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
    marginBottom: 5,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    borderColor: "blue",
  },
  image: {
    width: 320,
    height: 320,
  },
  button:{
      marginTop:50
  }
});

export default ImageSelector;

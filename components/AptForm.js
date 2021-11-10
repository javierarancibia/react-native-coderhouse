import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";

const AptForm = (props) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Superficie"
          style={styles.input}
          onChangeText={props.handleChangeArea}
          value={props.areaValue}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Numero de Dormitorios"
          style={styles.input}
          onChangeText={props.handleChangeBedroom}
          value={props.bedroomTotal}
        />
      </View>
      
      <View style={styles.button}>
        <Pressable onPress={props.handleAddItem}>
          <Text style={{ color: "white" }}> Valoriza tu depa </Text>
        </Pressable>
      </View>
    </View>
  );
};

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
      borderColor: "grey",
      borderWidth: 1,
      width: 200,
      marginTop: 15,
      borderRadius: 15
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

export default AptForm;

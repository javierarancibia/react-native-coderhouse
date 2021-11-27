import React from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";

const ModalAlert = (props) => {
  return (
    <Modal
      visible={props.modalVisible}
      animationType="slide"
      style={styles.screen}
    >
      <View>
        <View style={styles.confirmText}>
          <Text>¿Está seguro que desea borrar?</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Pressable onPress={props.handleRemoveConfirm}>
          <Text style={{ color: "white" }}>Confirma</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  confirmText: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 120,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    elevation: 3,
    borderRadius: 45,
    backgroundColor: "#24A9EB",
    marginTop: 30,
    color: "white",
    margin: 50,
  },
});

export default ModalAlert;

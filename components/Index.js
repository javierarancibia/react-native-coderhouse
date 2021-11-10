import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import IntroText from "./IntroText.js";
import ModalAlert from "./ModalAlert.js";
import AptForm from "./AptForm.js";

function Index() {
  const [areaValue, setAreaValue] = useState(0);
  const [bedroomTotal, setBedroomTotal] = useState(0);
  const [apartmentList, setApartmentList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeArea = (value) => {
    setAreaValue(parseInt(value));
  };

  const handleChangeBedroom = (value) => {
    setBedroomTotal(parseInt(value));
  };

  const handleAddItem = () => {
    const item = {
      area: areaValue,
      bedroomTotal: bedroomTotal,
      id: Math.random(6).toString(),
    };
    setApartmentList([...apartmentList, item]);
    setAreaValue("");
    setBedroomTotal("");
  };

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(apartmentList.find((item) => item.id === id));
  };

  const handleRemoveConfirm = () => {
    const newList = apartmentList.filter((item) => item.id !== itemSelected.id);
    setApartmentList(newList);
    setModalVisible(false);
    setItemSelected({});
  };

  return (
    <View >
      <IntroText />
      <AptForm
        handleChangeArea={handleChangeArea}
        handleChangeBedroom={handleChangeBedroom}
        areaValue={areaValue}
        bedroomTotal={bedroomTotal}
        handleAddItem={handleAddItem}
      />
      <SafeAreaView style={styles.container}>
          <FlatList
            data={apartmentList}
            keyExtractor={(item) => item.id}
            renderItem={(data) => (
              <View style={styles.item} key={data.item.id}>
                <Text>Superficie: {data.item.area}</Text>
                <Text>Dormitorios: {data.item.bedroomTotal}</Text>
                <View style={{marginTop:20}}>
                  <Button
                    title="Borrar Info"
                    onPress={() => handleRemoveItem(data.item.id)}
                  />
                  <Button
                    title="Confirmar"
                  />
                </View>
              </View>
            )}
          />
      </SafeAreaView>
      <ModalAlert
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleRemoveConfirm={handleRemoveConfirm}
      />
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
    borderColor: "black",
    borderWidth: 1,
    width: 100,
  },
  items: {
    backgroundColor: "#ECECEC",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  item: {
    flex:1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius:30,
    marginVertical:8
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 45,
    backgroundColor: "#24A9EB",
    marginTop: 80,
    padding: 10,
  },
});

export default Index;

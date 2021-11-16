import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import IntroText from "./IntroText.js";
import AptForm from "./AptForm.js";
// import { Icon } from 'react-native-elements'

function Index(props) {
  const [apartmentData, setApartmentData] = useState();

  const getApartmentData = (apartment) => {
    props.onGetApartment(apartment)
    setApartmentData(apartment)
  }

  return (
    <ScrollView>
      <IntroText />
      <AptForm onGetApartmentData={getApartmentData} />
      { apartmentData && <SafeAreaView style={styles.container}>
            <View style={styles.item} key={apartmentData.id}>
              <Text>Superficie: {apartmentData.area}</Text>
              <Text>Dormitorios: {apartmentData.bedroomTotal}</Text>
              <Text>Baños: {apartmentData.bathroomTotal}</Text>
              <Text>Ciudad: {apartmentData.city}</Text>
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Borrar Info"
                  // onPress={() => handleRemoveItem(data.item.id)}
                />
                <Button
                  title="Confirmar"
                  // onPress={() => props.onGetApartment(apartmentList)}
                />
              </View>
            </View>
      </SafeAreaView> }
      
    </ScrollView>
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
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius:30,
    marginVertical: 8,
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

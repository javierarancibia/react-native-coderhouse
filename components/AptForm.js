import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Picker,
} from "react-native";

const AptForm = (props) => {
  const [areaValue, setAreaValue] = useState(0);
  const [bedroomTotal, setBedroomTotal] = useState(0);
  const [bathroomTotal, setBathroomTotal] = useState(0);
  const [city, setCity] = useState("");
  const [regions, setRegions] = useState();

  useEffect(() => {
    fetch("https://apis.digital.gob.cl/dpa/comunas")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((responseJson) => {
        return setRegions(responseJson);
      });
  }, []);

  const handleChangeArea = (value) => {
    setAreaValue(parseInt(value));
  };

  const handleChangeBedroom = (value) => {
    setBedroomTotal(parseInt(value));
  };

  const handleChangeBathroom = (value) => {
    setBathroomTotal(parseInt(value));
  };

  const handleAddItem = () => {
    const item = {
      area: areaValue,
      bedroomTotal: bedroomTotal,
      bathroomTotal: bathroomTotal,
      city: city,
      id: Math.random(6).toString(),
    };
    props.onGetApartmentData(item);
    setAreaValue("");
    setBedroomTotal("");
    setBathroomTotal("");
    setCity("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Superficie"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChangeArea}
          value={areaValue}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Numero de Dormitorios"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChangeBedroom}
          value={bedroomTotal}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Numero de Baños"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={handleChangeBathroom}
          value={bathroomTotal}
        />
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={city}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
        >
          <Picker.Item label="Elige una ciudad" />
          {regions &&
            regions.map((city) => (
              <Picker.Item
                key={city.codigo}
                label={city.nombre}
                value={city.nombre}
              />
            ))}
        </Picker>
      </View>

      <View style={styles.button}>
        <Pressable onPress={handleAddItem}>
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
    width: 300,
    marginTop: 15,
    borderRadius: 15,
    paddingLeft: 15,
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

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ufApiCall = () => {
  const [ufValue, setUfValue] = useState();

  useEffect(() => {
    fetch("https://mindicador.cl/api/uf")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((responseJson) => {
        let ufToday = responseJson.serie[0].valor;
        return setUfValue(ufToday);
      });
  });

  return (
    <View>
      <Text>Valor UF hoy: ${ufValue}</Text>
    </View>
  );
};

export default ufApiCall;

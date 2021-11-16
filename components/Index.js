import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import IntroText from "./IntroText.js";
import AptForm from "./AptForm.js";
// import { Icon } from 'react-native-elements'

function Index(props) {
  const [apartmentData, setApartmentData] = useState();

  const getApartmentData = (apartment) => {
    props.onGetApartment(apartment);
    setApartmentData(apartment);
  };

  return (
    <ScrollView>
      <IntroText />
      <AptForm onGetApartmentData={getApartmentData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});

export default Index;

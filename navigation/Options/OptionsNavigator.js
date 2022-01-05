import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import OptionScreen from "../../screens/OptionScreen";
import DetailScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const OptionsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: "#F08080"}, headerTintColor: 'white', headerTitleStyle:{fontWeight: 'bold'} }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "¿Que quieres cocinar?" }}
      />
      <Stack.Screen
        name="Option"
        component={OptionScreen}
        options={{ title: "Nuestra propuesta" }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalle de la receta" }}
      />
    </Stack.Navigator>
  );
};

export default OptionsNavigator;

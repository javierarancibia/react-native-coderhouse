import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import OptionsNavigator from "../Options/OptionsNavigator";
import MyRecipesNavigator from "../myRecipes/MyRecipesNavigator";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen
        name="OptionsTab"
        component={OptionsNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'#F08080'} size={26} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Recipes"
        component={MyRecipesNavigator}
        options={{
          tabBarLabel: "Mis Recetas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pizza" color={'#F08080'} size={26} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;

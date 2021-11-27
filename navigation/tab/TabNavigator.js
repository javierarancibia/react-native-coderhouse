import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import OptionsNavigator from "../Options/OptionsNavigator";
import MyRecipesNavigator from "../myRecipes/MyRecipesNavigator";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (

      <BottomTabs.Navigator >
        <BottomTabs.Screen name="OptionsTab" component={OptionsNavigator} />
        <BottomTabs.Screen name="Recipes" component={MyRecipesNavigator} />
      </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90,
      shadowColor: '#7f5df0',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 0.25,
      elevation: 5,
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default TabNavigator;

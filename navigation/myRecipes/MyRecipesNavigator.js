import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyRecipesScreen from "../../screens/MyRecipesScreen";
import RecipesListScreen from "../../screens/RecipesListScreen";


const Stack = createNativeStackNavigator();

const MyRecipesNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="MyRecipes">
        <Stack.Screen name="MyRecipes" component={MyRecipesScreen} />
        <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      </Stack.Navigator>
  );
};

export default MyRecipesNavigator;
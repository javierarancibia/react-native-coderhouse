import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyRecipesScreen from "../../screens/MyRecipesScreen";
import RecipesListScreen from "../../screens/RecipesListScreen";
import MyRecipeDetail from "../../screens/MyRecipeDetail";

const Stack = createNativeStackNavigator();

const MyRecipesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyRecipes"
      screenOptions={{
        headerStyle: { backgroundColor: "#F08080" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="MyRecipes"
        component={MyRecipesScreen}
        options={{ title: "Mis Recetas - Categorias" }}
      />
      <Stack.Screen
        name="RecipesList"
        component={RecipesListScreen}
        options={{ title: "Mis Recetas" }}
      />
      <Stack.Screen
        name="MyRecipeDetail"
        component={MyRecipeDetail}
        options={{ title: "Detalle de Mi Receta" }}
      />
    </Stack.Navigator>
  );
};

export default MyRecipesNavigator;

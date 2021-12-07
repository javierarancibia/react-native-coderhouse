import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import MyRecipesReducer from './reducers/myRecipes.reducer'

const RootReducer = combineReducers({
  Categories: CategoryReducer,
  AllRecipes: MyRecipesReducer
});

export default createStore(RootReducer);

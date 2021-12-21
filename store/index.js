import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import MyRecipesReducer from './reducers/myRecipes.reducer'
import thunk from "redux-thunk"

const RootReducer = combineReducers({
  Categories: CategoryReducer,
  AllRecipes: MyRecipesReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));

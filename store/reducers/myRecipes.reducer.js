import { SAVE_RECIPE, SAVE_IMAGE } from "../actions/recipes.actions";
const initialState = {
  list: [],
};

const MyRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: [...state.list, action.recipe],
      };

    case SAVE_IMAGE:
      const index = state.list.findIndex(
        (item) => item.itemId === action.recipe.itemId
      );
      console.log(action.recipe.image)
      return {
        ...state,
        list: [...state.list, ...state.list[index].image = action.recipe.image  ],
      };
    default:
      return state;
  }
};

export default MyRecipesReducer;

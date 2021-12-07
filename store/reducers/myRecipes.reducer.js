import { SAVE_RECIPE } from "../actions/recipes.actions";
const initialState = {
  list: [
    {
      categoryID: 1,
      itemId: 1,
      name: 'Tarta de limon',
    },
    {
      categoryID: 1,
      itemId: 2,
      name: 'Cafe con leche',
    },
    {
      categoryID: 2,
      itemId: 3,
      name: 'Milanesa con ensalada',
    },
    {
      categoryID: 2,
      itemId: 4,
      name: 'Risotto de funghi',
    },
    {
      categoryID: 3,
      itemId: 5,
      name: 'Pizza de anchoas',
    },
    {
      categoryID: 3,
      itemId: 6,
      name: 'Estofado',
    }
  ],
};

const MyRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: [...state.list, action.recipe]
      };
    default:
      return state;
  }
};

export default MyRecipesReducer;

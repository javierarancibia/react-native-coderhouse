export const SAVE_RECIPE = "SAVE_RECIPE";

export const saveRecipe = item =>({
  type: SAVE_RECIPE,
  recipe: item,
});

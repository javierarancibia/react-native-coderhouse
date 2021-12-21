export const SAVE_RECIPE = "SAVE_RECIPE";
export const SAVE_IMAGE = "SAVE_IMAGE";
import * as FileSystem from "expo-file-system";

export const saveRecipe = (item) => ({
  type: SAVE_RECIPE,
  recipe: item,
});

export const saveImage = (image, itemId) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    console.log(image)

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
        
      });
    } catch (error) {
      console.log(err.message);
      throw err;
    }
    dispatch({ type: SAVE_IMAGE, recipe: { image: Path, itemId: itemId } });
  };
};

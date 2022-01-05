const config = require("../config");
export const CATEGORIES = [
    {
        id: 1,
        name: 'Desayuno',
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Breakfast&random=true`,
        image: require("../assets/cooking.jpg")
    },
    {
        id: 2, 
        name: 'Almuerzo',
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Lunch&random=true`,
        image: require("../assets/cooking.jpg")
    }, 
    {
        id: 3, 
        name: 'Cena', 
        baseURL: `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=&app_id=${config.APP_ID}&app_key=${config.API_KEY}&mealType=Dinner&random=true`,
        image: require("../assets/cooking.jpg")
    }
]
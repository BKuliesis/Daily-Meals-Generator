const meals = {
    breakfast: [],
    lunch: [],
    dinner: [],
};

function generateRandomMeal() {
    const randomMeals = [];
    for (let meal in meals) {
        let randomIndex = Math.floor(Math.random() * meals[meal].length);
        randomMeals.push(meals[meal][randomIndex]);
    }
    return randomMeals;
};
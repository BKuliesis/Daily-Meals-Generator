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
}

function outputMeals(meals) {
    console.log(`Breakfast: ${meals[0]}`);
    console.log(`Lunch: ${meals[1]}`);
    console.log(`Dinner: ${meals[2]}`);
}

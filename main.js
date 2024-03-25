const meals = {
    breakfast: ['Pancakes', 'French Toast', 'Croissant', 'Bagel and Cream Cheese', 'Yogurt Parfait'],
    lunch: ['Burrito Bowl', 'Grilled Cheese Sandwich', 'Turkey Wrap', 'Falafel Pita', 'Sushi'],
    dinner: ['Roast Chicken', 'Mushroom Risotto', 'Seafood Paella', 'Spaghetti Carbonara', 'Vegetable Stir Fry'],
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

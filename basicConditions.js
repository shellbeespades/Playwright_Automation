// if statements
let age = 15; // more realistically, some user input vbl
// check if condition is met, and perform action if it is
if (age >= 13) {
    console.log("Welcome! You can access the website.");
}
// Add a message if they can't access
console.log("Age verification complete.");


// Comparison operators
// Equal to (==) - Compares values but not types
console.log(5 == "5");  // true (different types but same value)

// Strictly equal to (===) - Compares both values and types
console.log(5 === "5");  // false (different types)
console.log(5 === 5);    // true (same type and value)

// Not equal to (!=) and strictly not equal (!==)
console.log(5 != "5");   // false (same value)
console.log(5 !== "5");  // true (different types)


// Logical Operators
// AND (&&) - Both conditions must be true
console.log(true && true);    // true
console.log(true && false);   // false
// OR (||) - At least one condition must be true
console.log(true || false);   // true
console.log(false || false);  // false
// NOT (!) - Inverts the value
console.log(!true);   // false
console.log(!false);  // true


// Combining Operators
// Check username AND password
let correctUsername = "student123";
let correctPassword = "pass123";
// Both must be true to login successfully
let loginSuccess = (correctUsername === "student123") && (correctPassword === "pass123");
console.log("Login successful: " + loginSuccess);  // true


// Example Switch Statement
// Menu selection
let choice = "salad";
// Create menu system using switch
// Hint: Different responses for different menu items
// Your code here:

switch (choice) {
    case "burger": 
        console.log("Menu Selection: Burger");
        console.log("Price: $10.00");
        console.log("Preparation Time: 15 min");
        break;
    case "pizza":
        console.log("Menu Selection: Pizza");
        console.log("Price: $12.00");
        console.log("Preparation Time: 20 min");
        break;
    case "salad":
        console.log("Menu Selection: Salad");
        console.log("Price: $8.00");
        console.log("Preparation Time: 10 min");
        break;
    default:
        console.log("Unknown menu item - please talk to the chef directly");
}


// Switch statement solution from coursera activity
let choiceX = "burger";
switch(choiceX) {
case "burger":
console.log("Burger - $10");
console.log("Preparation time: 15 minutes");
console.log("Ingredients: beef patty, lettuce, tomato, cheese");
break;
case "pizza":
console.log("Pizza - $12");
console.log("Preparation time: 20 minutes");
console.log("Ingredients: dough, tomato sauce, cheese, toppings");
break;
case "salad":
console.log("Salad - $8");
console.log("Preparation time: 10 minutes");
console.log("Ingredients: mixed greens, tomatoes, cucumber, dressing");
break;
default:
console.log("Sorry, that item is not on our menu.");
}

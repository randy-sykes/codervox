

/* Section 11.7 Iterating over arrays part 2*/
var coffee = ['Americano', 'Caffe Latte', 'Flat White'];

function theDrink(drink) {
    document.write("<div>" + drink + "</div>");
}

coffee.forEach(theDrink);

coffee.forEach(function (drink) {
    document.write("<div>" + drink + "</div>")
});

/* Section 11.6 - Iterating over arrays part 1

var coffee = ['Americano', 'Caffe Latte', 'Flat white'];

for (var i = 0; i < coffee.length; i++) {
    document.write('<div>' + coffee[i] + '</div>');
}
*/

/* Section 11.5 - Array methods part 3


var numbers = [1, 10, 13, 37];

function over14(number) {
    return number > 14;
}

var check = numbers.filter(over14);
console.log(check);

var people = ['kim', 'jim', 'tim'];

function letters(letter) {
    return letter.toUpperCase();
}

var newPeople = people.map(letters);
// console.log(newPeople);
*/

/* Section 11.4 - Array methods part 2

var brunch = ['scrambled eggs', 'toast', 'smoked salmon', 'yogurt'];

var brunch2 = brunch.slice(1, 3);
var brunch3 = brunch.slice(2, 3);
console.log(brunch2);
console.log(brunch3);


var lunch = ['chicken salad', 'pasta', 'protein shake'];
lunch.unshift('donuts');

// console.log(lunch);

// lunch.shift();
// console.log(lunch);

var food = ["pizza", "burgers", "fries", "tacos", "burgers"];

var theBurger = food.indexOf("burgers", 2);
// console.log(theBurger);
*/

/* Section 11.3 - Array methods part 1


var breakfast = ["coffee cake muffin", "oatmeal", "hash browns"];
var leftovers = breakfast.pop();

console.log(leftovers);
console.log(breakfast);


var food = ["pizza", "burgers", "fries", "tacos", "burgers"];

// food.push("cheeseburger");
// console.log(food);


// var foodReverse = food.reverse();
// console.log(foodReverse);


var bakery = ["Banana Nut Bread", "Blueberry Muffin", "Butter Croissant"];

var doesItExist = bakery.includes("Butter");
// console.log(doesItExist);


var bakery1 = ["Banana Nut Bread", "Blueberry Muffin", "Butter Croissant"];
var bakery2 = ["Cinnamon Raisin Bagel", "Double Chocolate Chunk Brownie"];

var newBakery = bakery1.concat(bakery2);
// console.log(newBakery);
*/

/* Section 11.2 - Index and length
var food = ["donuts", "coffee", "ice cream", "lobster", "", "", "", "", "", "", "", "testing"];

food[3] = "big lobster";

console.log(food[food.length - 1]);

for(var i = 0; i < food.length; i++) {
    console.log(food[i]);
}

*/

/* Section 11.1 - What are arrays?
var food = ["donuts", "coffee", "ice cream", "lobster"];

console.log(food);
console.log(food[0]);
*/
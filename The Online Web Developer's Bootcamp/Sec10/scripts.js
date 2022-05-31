

/* Sec 10.11*/
setTimeout(function() {
    alert('I love chocolate chip cookies!');
}, 3000);

/* Sec 10.10
function theHello(name, question) {
    alert("Hello " + name + "!");
    question();
}

function help() {
    alert("How can I assist you?");
}

theHello('Garfield', help);
*/

/* Sec 10.9 - Exercise
var frozenCoffee1 = "French Vanilla";
var frozenCoffee2 = "Hazelnut";
var frozenCoffee3 = "Caramel";

function customer1(flavor) {
    var frozenCoffee1 = "Hazelnut";
    return flavor;
}

var theOrder = customer1(frozenCoffee1);

function customer2() {
    var theOrder = "Hazelnut";
    var frozenCoffee2 = "Mocha";
    console.log("I need a " + theOrder + " and an order of " + frozenCoffee2 + " please!");
    console.log("Also, can I get a " + frozenCoffee3 + "?");
}

customer2();
console.log(theOrder);
*/

/* Sec 10.8
var donut = "Chocolate Glazed";

function dunkinDonuts() {
    var donut = "Pumpkin spice";
    document.write(donut);
}

dunkinDonuts();
*/

/* Sec 10.7
function emotion(feelings) {
    console.log(feelings);
}

var currentFeeling = emotion("really love");

function theNumber (number) {
    console.log(number);
}

var times = theNumber(3);

function restaurants(place1) {
    console.log("I " + currentFeeling + " eating at " + place1 + " and I've been there " + times + " times.");
}

restaurants("In-N-Out");
*/

/* Sec 10.6
function stuff() {
    return "What?";
    var question = "Why";
    return question;

}


document.write(stuff());
*/
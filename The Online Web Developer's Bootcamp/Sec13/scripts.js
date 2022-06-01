/* Section 13.8 - Attributes*/
console.log("href: " + document.querySelector("a").hasAttribute('href'));
console.log("id: " + document.querySelector("a").hasAttribute('id'));
console.log("class: " + document.querySelector("a").hasAttribute('class'));
console.log("href value: " + document.querySelector("a").getAttribute('href'));
document.querySelector("a").removeAttribute('href');
document.querySelector("a").setAttribute('href', 'https://www.dunkindonuts.com');
document.querySelector("a").setAttribute('id', 'goDunkin');
document.querySelector("a").textContent = "GO Dunkin!";


/* Section 13.7 - Style
document.getElementById("coffee").style.color = "green";
document.getElementById("coffee").style.backgroundColor = "yellow";

var theDrinks = document.getElementsByClassName("drink");

for (var i = 0; i < theDrinks.length; i++) {
    theDrinks[i].style.backgroundColor = "orange";
}
*/

/* Section 13.6 - Text
var theText = document.getElementById("food").textContent;
var theHTML = document.getElementsByTagName("li")[1].innerHTML;
//document.getElementById("food").textContent = "The Delicious Pastries";
// document.getElementsByTagName("li")[2].innerHTML = "Vanilla <strong>Frosted</strong>";

console.log(theText);
console.log(theHTML);
*/

/* Section 13.5 - Selecting elements part 2
var theFood4 = document.getElementsByTagName("li");
var theFood5 = document.getElementsByClassName("snack");
var theFood6 = document.querySelectorAll(".snack");

console.log(theFood4[1]);
console.log(theFood4.constructor.name);
console.log(theFood5[0].textContent);
console.log(theFood6[2].textContent);
*/

/* Section 13.4 - Selecting elements part 1
var theFood1 = document.getElementById("food");
var theFood2 = document.querySelector("#food");
var theFood3 = document.querySelector("li");
var theFood4 = document.querySelectorAll(".snack");

console.log(theFood1);
console.log(theFood2);
console.log(theFood3);
console.log(theFood4);
*/

/* Section 13.3 - The window object*/
/* Section 13.2 - Nodes*/
/* Section 13.1 - What is the DOM?*/